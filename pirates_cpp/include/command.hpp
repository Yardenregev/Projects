#ifndef PIRATES_COMMAND_HPP
#define PIRATES_COMMAND_HPP

#include <string>
namespace pirates
{
    

class Command
{
public:
    Command(const std::string& action);
    virtual ~Command() = 0;
    virtual void Execute() = 0;

    const std::string& GetAction() const;
private:
    std::string m_action;
};


} // namespace pirates
#endif //PIRATES_COMMAND_HPP