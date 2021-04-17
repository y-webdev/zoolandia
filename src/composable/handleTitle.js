import { navItems } from "@/composable/staticData";

export const handleTitle = (link) => {
    let title = '';
    navItems.forEach(item => {
        if (item.link.match(link)) {
            title = item.title
        }
    })

    return title;
}
