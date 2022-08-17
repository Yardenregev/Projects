#include "../include/sailor.hpp"
#include "../../commands/include/sail_command.hpp"

#include <iostream>/*std cout cin*/
namespace pirates
{
    Sailor::Sailor()
        :CrewMember(std::make_shared<SailCommand>())
    {}
    

} // namespace pirates