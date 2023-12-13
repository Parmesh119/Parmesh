import Links from 'next/link';
import { FC } from 'react';
import Button from '../ui/Button';
import { Instagram } from 'lucide-react';
import { Link } from 'lucide-react'

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
    return (
        <div className="text-3xl flex flex-col font-bold text-highlight">
           Parmesh Bhatt
            <div className="text-sm font-thin flex justify-between items-center">
                <span className="font-bold">@Parmesh119</span>
                <Links
                    className="block md:hidden"
                    href="https://linktr.ee/parmesh119t"
                    target='_blank'
                >
                    <Button variant="primary" sizes={'iconOnly'}>
                        <Link />
                    </Button>
                </Links>
            </div>
        </div>
    );
};

export default ProfileName;
