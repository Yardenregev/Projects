#ifndef PIRAETS_CREW_MEMBER_HPP
#define PIRAETS_CREW_MEMBER_HPP
#include <memory>

#include "dispatcher.hpp"
#include "command.hpp"
#include "commander.hpp"
#include "crew_member.hpp"

namespace pirates
{
class Captain : public Callback<std::shared_ptr<Command>>
{
public:
    Captain(std::shared_ptr<Commander> commander_);
    void Update(std::shared_ptr<Command> command_);
    void AddCrewMember(std::shared_ptr<CrewMember> crewMember_);
private:
    std::map<std::shared_ptr<Command>, std::shared_ptr<CrewMember>> m_crew;
};

} // namespace pirates
#endif
