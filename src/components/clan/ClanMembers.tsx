import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import CardTitle from "../ui/CardTitle";
import Image from "next/image";
import ClanMembersTable from "./ClanMembersTable";
import { ClanMember } from "@/types/player";

interface ClanMembersProps {
    memberList: ClanMember[];
    memberCount: number;
}

export default function ClanMembers({
    memberList,
    memberCount,
}: ClanMembersProps) {
    return (
        <CardContainer
            className="md:col-span-2"
            ariaLabelledBy="clan-members-title"
        >
            <CardHeaderContainer>
                <CardTitle titleId="clan-members-title">
                    Members {memberCount}/50
                </CardTitle>
                <Image
                    src="/assets/members.webp"
                    alt="Clan members icon"
                    height={80}
                    width={76}
                    className="w-10"
                />
            </CardHeaderContainer>
            <div className="overflow-x-auto px-6">
                <ClanMembersTable memberList={memberList} />
            </div>
        </CardContainer>
    );
}
