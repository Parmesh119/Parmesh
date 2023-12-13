// NOT IN USE
import { FC } from 'react';
import List from '../ui/List';

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
    return (
        <div className="flex gap-4">
            <List
                link="/"
                variant="secondary"
                sizes="small"
                effect="changeColor"
            >
                Home
            </List>
            <List
                link="/aboutme"
                variant="secondary"
                sizes="small"
                effect="changeColor"
            >
                About me
            </List>
            <List
                link="/education"
                variant="secondary"
                sizes="small"
                effect="changeColor"
            >
                Education
            </List>
            <List
                link="/achievements"
                variant="secondary"
                sizes="small"
                effect="changeColor"
            >
                Achievements
            </List>
            <List
                link="/home"
                variant="secondary"
                sizes="small"
                effect="changeColor"
            >
                About
            </List>
        </div>
    );
};

export default Menu;
