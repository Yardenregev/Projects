#include "../include/captain.hpp"
#include <iostream>/*std cout cin*/

namespace pirates
{
    Captain::Captain(std::shared_ptr<Commander> commander_)
        : Callback<std::shared_ptr<Command>>(*commander_)
    {
    }

    void Captain::Update(std::shared_ptr<Command> command_)
    {
        if(m_crew.find(command_) != m_crew.end())
        {
            m_crew[command_]->ExecuteCommand();
        }
        else
        {
            std::cout << "Admiral, We don't know how to do that." << std::endl;
        }
    }
    
} // namespace pirates