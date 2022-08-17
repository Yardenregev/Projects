#ifndef PIRATES_SAILOR_HPP
#define PIRATES_SAILOR_HPP

#include "../include/crew_member.hpp"
namespace pirates
{
class Sailor : public CrewMember
{
public:
    Sailor();
    virtual ~Sailor() = default;

private:
    std::shared_ptr<Command> m_command;
};
} // namespace pirates

#endif