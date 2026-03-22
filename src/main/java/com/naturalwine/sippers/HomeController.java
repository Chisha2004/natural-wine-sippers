package com.naturalwine.sippers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    /**
     * Match paths that do NOT contain a period (e.g., /login, /dashboard/settings).
     * This avoids intercepting static files like .js, .css, .png, and index.html itself.
     */
    @RequestMapping(value = { "{path:[^\\.]*}", "/**/{path:[^\\.]*}" })
    public String forwardToIndex() {
        return "forward:/index.html";
    }

    // You don't strictly need the @GetMapping("/") if the pattern above
    // is configured correctly, but it doesn't hurt.
    @GetMapping("/")
    public String home() {
        return "forward:/index.html";
    }
}
