import moment from "moment";
import RankMask from "../ui/RankMask";
import Table from "../ui/table/Table";
import TableHeader from "../ui/table/TableHeader";
import { getRoleBgClass } from "@/utils/badgeClass";
import Link from "next/link";
import { sanitizeTag } from "@/utils/stringMethods";
import { ClanMember } from "@/types/player.interface";

export default function ClanMembersTable({
    memberList,
}: {
    memberList: ClanMember[];
}) {
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
        <Table>
            {/* header */}
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
                                <Link
                                    href={`/player/${sanitizeTag(member.tag)}`}
                                    className="font-bold link link-hover hover:link-primary"
                                >
                                    {member.name}
                                </Link>
                                <p className="text-sm opacity-50">
                                    {member.tag}
                                </p>
                            </div>
                        </td>
                        <td>{member.expLevel}</td>
                        <td>{member.trophies}</td>
                        <td>
                            <span
                                className={`badge flex height-full capitalize ${getRoleBgClass(
                                    member.role
                                )}`}
                            >
                                {" "}
                                {member.role}
                            </span>
                        </td>
                        <td>{member.donations}</td>
                        <td>{member.donationsReceived}</td>
                        <td>{member.lastSeen}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <TableHeader tableColumns={tableColumns} />
            </tfoot>
        </Table>
    );
}
