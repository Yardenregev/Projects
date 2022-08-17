#ifndef PIRATES_COMMAND_FACTORY_HPP
#define PIRATES_COMMAND_FACTORY_HPP

#include <string>
#include <functional>

#include "command.hpp"
#include "factory.hpp"
namespace pirates
{
class CommandArsenal
{
public:
    void AddCommand(const std::string &command_, std::function<std::shared_ptr<Command> (const std::string & action)> func_);
    std::shared_ptr<Command> CreateCommand(const std::string &command_);

private:
    Factory<const std::string &, std::shared_ptr<Command>, const std::string &> m_factory;
};
    
} // namespace pirates

#endif //PIRATES_COMMAND_FACTORY_HPP