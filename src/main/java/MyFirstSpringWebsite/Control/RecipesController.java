package MyFirstSpringWebsite.Control;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RecipesController {

    @RequestMapping("/")
    public String listRecipes(){
        return "home";
    }
}
