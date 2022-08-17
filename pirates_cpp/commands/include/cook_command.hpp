#ifndef PIRAETS_COOK_COMMAND_HPP
#define PIRAETS_COOK_COMMAND_HPP
#include "../include/command.hpp"
#include <string>
namespace pirates
{
class CookCommand : public Command
{
public:
    CookCommand();
    void Execute();
};
} // namespace pirates
#endif
