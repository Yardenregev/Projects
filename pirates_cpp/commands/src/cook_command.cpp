#include "../include/cook_command.hpp"

#include <iostream>/*std cout cin*/

namespace pirates
{
    CookCommand::CookCommand()
    : Command("Cook")
    {}

    void CookCommand::Execute()
    {
        std::cout << "Cooking" << std::endl;
    }
    
    
} // namespace pirates