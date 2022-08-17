#include <memory>
#include "../crew_members/include/cook.hpp"
#include "../crew_members/include/sailor.hpp"
#include "../include/commander.hpp"

int main ()
{
    pirates::CrewMember* sailor = new pirates::Sailor();
    
    std::shared_ptr<pirates::CrewMember> cook = std::make_shared<pirates::Cook>();






    return 0;
}
