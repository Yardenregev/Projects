#ifndef PIRATES_CREW_MEMBER_HPP
#define PIRAETS_CREW_MEMBER_HPP

#include "command.hpp"
#include <memory>

namespace pirates
{
class CrewMember
{
public:
    CrewMember(std::shared_ptr<Command> command_);
    virtual ~CrewMember() = 0;
    void ExecuteCommand();
    std::shared_ptr<Command> GetCrewCommand();
private:
    std::shared_ptr<Command> m_command;
};

} // namespace pirates


#endif
