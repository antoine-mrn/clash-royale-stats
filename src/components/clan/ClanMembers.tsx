import { PlayerInClan } from "@/types/player.interface";
import Table from "../ui/table/Table";
import TableHeader from "../ui/table/TableHeader";
import { table } from "console";
import RankMask from "../ui/RankMask";

interface ClanMembersProps {
    memberList: PlayerInClan[];
}

export default function ClanMembers({ memberList }: ClanMembersProps) {
    const tableColumns = [
        "Rank",
        "Name",
        "Level",
        "Trophies",
        "Role",
        "Donation",
        "Donation received",
        "Last seen",
    ];

    return (
        <div className="overflow-x-auto max-w-7-xl mx-auto">
            <Table>
                {/* head */}
                <thead>
                    <TableHeader tableColumns={tableColumns} />
                </thead>
                <tbody>
                    {memberList.map((member, index) => (
                        <tr key={index}>
                            <td>
                                <RankMask rank={member.clanRank} />
                            </td>
                            <td>
                                <div>
                                    <div className="font-bold">
                                        {member.name}
                                    </div>
                                    <div className="text-sm opacity-50">
                                        {member.tag}
                                    </div>
                                </div>
                            </td>
                            <td>{member.expLevel}</td>
                            <td>{member.trophies}</td>
                            <td>{member.role}</td>
                            <td>{member.donations}</td>
                            <td>{member.donationsReceived}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <TableHeader tableColumns={tableColumns} />
                </tfoot>
            </Table>
        </div>
    );
}
