#include "../include/command.hpp"

namespace pirates
{

    Command::Command(const std::string& action)
        : m_action(action)
    {}

    Command::~Command()
    {}

    const std::string& Command::GetAction() const
    {
        return m_action;
    }

} // namespace pir