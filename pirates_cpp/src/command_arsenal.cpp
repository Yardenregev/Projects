#include "../include/command_arsenal.hpp"

namespace pirates
{
    void CommandArsenal::AddCommand(const std::string &command_, std::function<std::shared_ptr<Command>()> func_)
    {
        m_factory.Add(command_, func_);
    }
    
    std::shared_ptr<Command> CommandArsenal::CreateCommand(const std::string &command_)
    {
        return m_factory.Create(command_);
    }

} // namespace pirates
