import { PlayerInClan } from "@/types/player.interface";
import Table from "../ui/table/Table";
import TableHeader from "../ui/table/TableHeader";
import RankMask from "../ui/RankMask";
import moment from "moment";
import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import CardTitle from "../ui/CardTitle";
import Image from "next/image";
import ClanMembersTable from "./ClanMembersTable";

interface ClanMembersProps {
    memberList: PlayerInClan[];
    memberCount: number;
}

export default function ClanMembers({
    memberList,
    memberCount,
}: ClanMembersProps) {
    return (
        <CardContainer className="col-span-2">
            <CardHeaderContainer>
                <Image
                    src="/members.png"
                    alt="Clan member icon"
                    height={120}
                    width={114}
                    className="w-10"
                />
                <CardTitle>Members {memberCount}/50</CardTitle>
            </CardHeaderContainer>
            <div className="overflow-x-auto px-6">
                <ClanMembersTable memberList={memberList} />
            </div>
        </CardContainer>
    );
}
