#include "../include/crew_member.hpp"

namespace pirates
{
    CrewMember::CrewMember(std::shared_ptr<Command> command)
        :m_command(command)
    {}
    
    CrewMember::~CrewMember()
    {}

    void CrewMember::ExecuteCommand()
    {
        m_command->Execute();
    }

    std::shared_ptr<Command> CrewMember::GetCrewCommand()
    {
        return m_command;
    }
    
} // namespace pirates