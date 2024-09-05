package com.N2Ninterface.Interface.HomeController;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/N2N/Login")
    public String login(Model model) {
        return "Main";
    }

    @GetMapping("/N2N/management")
    public String management(Model model) {
        return "N2Nmanagement";
    }
}
