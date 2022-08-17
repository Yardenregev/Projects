#include "../include/commander.hpp"

namespace pirates
{
    void Commander::ShoutCommand(const std::string &command_)
    {
        std::shared_ptr<Command> command = m_commands.CreateCommand(command_);
        NotifyAll(command);
    }

    void Commander::AddCommand(const std::string &command_, std::function<std::shared_ptr<Command>()> func_)
    {
        m_commands.AddCommand(command_, func_);
    }

    
} // namespace pirates
