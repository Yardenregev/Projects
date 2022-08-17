#include "../include/cook.hpp"
#include "../../commands/include/cook_command.hpp"

#include <iostream>/*std cout cin*/
namespace pirates
{
    Cook::Cook()
        :CrewMember(std::make_shared<CookCommand>())
    {}
    

} // namespace pirates