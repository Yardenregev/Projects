#ifndef PIRATES_SAIL_COMMAND_HPP
#define PIRATES_SAIL_COMMAND_HPP
#include "../include/command.hpp"
#include <string>

namespace pirates
{
class SailCommand : public Command
{
public:
    SailCommand();
    void Execute();
};

} // namespace pirates
#endif
