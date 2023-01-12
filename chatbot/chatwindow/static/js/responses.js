function getBotResponse(input) {
    
    if (input == "issue on create pr") {
        return "will help you on that";
    } else if (input == "issue on query") {
        return "lets solve it";
    } else if (input == "issue on design") {
        return "cant help you sorry, try to contact your administrator";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "bye") {
        return "bye, Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}
