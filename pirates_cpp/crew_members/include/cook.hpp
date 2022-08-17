#ifndef PIRATES_COOK_HPP
#define PIRATES_COOK_HPP

#include "../include/crew_member.hpp"

namespace pirates
{
class Cook : public CrewMember
{
public:
    Cook();
    virtual ~Cook() = default;
    
private:
    std::shared_ptr<Command> m_command;
};
} // namespace pirates

#endif