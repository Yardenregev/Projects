#include "../include/game.hpp"
#include "../include/design_patterns/singleton.hpp"
#include <iostream>/*std cout cin*/
#include "../include/pirate_types/pirate_types.hpp"
#include <memory>



namespace pirates_speed
{

    Game::Game(const std::string & commander_name, int port, const std::string & ip_address)
    : m_server(port, ip_address),
      m_commander_name(commander_name),
      m_captains(),
      m_winner(nullptr),
      m_game_pirate_inventory()
    {
        m_game_pirate_inventory.Add("Cleaner", std::dynamic_pointer_cast<CrewPirate>(std::make_shared<Cleaner>("Skippy")));
        m_game_pirate_inventory.Add("Cook", std::dynamic_pointer_cast<CrewPirate>(std::make_shared<Cook>("Salty")));
        m_game_pirate_inventory.Add("Sailor", std::dynamic_pointer_cast<CrewPirate>(std::make_shared<Sailor>("Smith")));
        m_game_pirate_inventory.Add("Looter", std::dynamic_pointer_cast<CrewPirate>(std::make_shared<Looter>("Lucky")));
        m_game_pirate_inventory.Add("Defender", std::dynamic_pointer_cast<CrewPirate>(std::make_shared<Defender>("Black Beard")));
    }



    void Game::RegisterCaptain()
    {   
        auto captain_details = m_server.AddCaptain();
        std::shared_ptr<Captain> captain = std::make_shared<Captain>(captain_details.first,m_game_pirate_inventory ,captain_details.second);
        m_captains[captain->GetName()] = captain;
        std::cout << "Captain " << captain->GetName() << " registered" << std::endl;
    }   



    void Game::AddCaptain()
    {
        RegisterCaptain();
    }


    void Game::StartGame()
    {
        std::cout << "Game started" << std::endl;
        while (!CheckIfGameIsOver())
        {
            SendInventoriesToAllCaptains();
            std::string given_command;
            std::cout << "Enter command: " << std::endl;
            std::cin >> given_command;
            m_server.ShoutCommand(given_command);   
            m_server.QueueAnswers();
            HandleAnswers(given_command);
            m_server.ClearAnswerQueue();
        }

        PrintGameOver();
    }

    bool Game::CheckIfGameIsOver() // check later for more efficiant solution
    {
        for (auto &captain : m_captains)
        {
            if (captain.second->IsWinner())
            {
                m_winner = captain.second;
                m_server.EndGame();
                return true;
            }
        }
        return false;
    }

    void Game::SendInventoriesToAllCaptains()
    {
        for (auto &captain : m_captains)
        {
            std::string inventory_string = captain.second->GetInventoryString();
            std::cout << "Sending inventory to Captain " << captain.second->GetName() << std::endl;
            m_server.SendMessageToCaptain(captain.second->GetName(), inventory_string);
        }
    }

    void Game::PrintGameOver()
    {
        std::cout << "Game over! The winner is: " << m_winner->GetName() << std::endl;
    }

    void Game::AddPirateToGameInventory(const std::string &role, std::shared_ptr<CrewPirate> pirate)
    {
        m_game_pirate_inventory.Add(role, pirate);
    }

    void Game::HandleAnswers(const std::string &command)
    {
        std::shared_ptr<Answer> answer;
        m_server.GetAnswer(answer);
        std::string correct_captain_name = "";
        size_t answer_count = 1;
        while(answer->GetPriority() != Priority::END_ROUND)
        {
            bool correct = MakeCaptainHandleAnswer(answer->GetCaptainName(), answer, command);
            if(correct)
            {
                correct_captain_name = answer->GetCaptainName();
                m_server.SendMessageToCaptain(answer->GetCaptainName(), "Correct answer\n");
                break;
            }

            else
            {
                m_server.SendMessageToCaptain(answer->GetCaptainName(), "Wrong answer\n");
            }
            
            if (answer_count == m_captains.size())
            {
                break;
            }

            m_server.GetAnswer(answer);
            answer_count++;
        }


        AddPirateForAllButCorrectCaptain(correct_captain_name);

        m_server.EndRound();
    }


    void Game::AddPirateForAllButCorrectCaptain(const std::string &correct_captain_name)
    {
        for (auto &captain : m_captains)
        {
            if(captain.second->GetName() != correct_captain_name)
            {
                captain.second->AddRandomPirate();
            }
        }
    }

    bool Game::MakeCaptainHandleAnswer(const std::string &captain_name, std::shared_ptr<Answer> answer, const std::string &command)
    {
       auto captain = m_captains[captain_name];
       if(captain == nullptr)
       {
           std::cout << "Captain not found" << std::endl;
           return false;
       }
       else
       {
           return captain->HandleAnswer(answer, command);
       }
    }

    std::string Game::GetCaptainInventory(const std::string &captain_name)
    {
        auto captain = m_captains[captain_name];
        if(captain == nullptr)
        {
            throw std::runtime_error("Captain not found");
        }
        else
        {
            return captain->GetInventoryString();
        }
    }



} // namespace pirates_speed