#pragma once
#include <string>
#include <memory>
#include "command.hpp"
#include <iostream>/*std cout cin*/

namespace pirates_speed
{



class CrewPirate
{
public:
    CrewPirate(const std::string &name, std::shared_ptr<Command> command);
    CrewPirate(const CrewPirate &other) = default;
    CrewPirate &operator=(const CrewPirate &other) = default;
    virtual ~CrewPirate() = 0;

    void ExecuteCommand();

    const std::string &GetCommandName() const;

    void SetCommand(std::shared_ptr<Command> command);

    const std::string &GetName() const;

    std::string ToString() const;

private:
    std::string m_name;

    std::shared_ptr<Command> m_command;
};

} // namespace pirates_speed