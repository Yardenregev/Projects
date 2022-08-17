#ifndef PIRATES_MAJOR_HPP
#define PIRATES_MAJOR_HPP
#include <memory>
#include <string>

#include "pirate.hpp"
#include "dispatcher.hpp"
#include "command_arsenal.hpp"

namespace pirates
{
    
class Commander : public Dispatcher<std::shared_ptr<Command>>
{
public:
    virtual ~Commander() = default;
    void ShoutCommand(const std::string &command_);
    void AddCommand(const std::string &command_, std::function<std::shared_ptr<Command> ()> func_);

private:
    CommandArsenal m_commands;
};

} // namespace pirates

#endif //PIRATES_MAJOR_HPP