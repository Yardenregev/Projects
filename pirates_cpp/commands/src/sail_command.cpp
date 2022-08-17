#include "../include/sail_command.hpp"

#include <iostream>/*std cout cin*/

namespace pirates
{
    SailCommand::SailCommand()
    : Command("Sail")
    {}

    void SailCommand::Execute()
    {
        std::cout << "Sailing" << std::endl;
    }
    
    
} // namespace pirates