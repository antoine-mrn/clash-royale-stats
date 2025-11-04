import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import CardTitle from "../ui/CardTitle";
import Image from "next/image";
import { RiverRaceClan } from "@/types/riverRace.interface";
import ClanWarRow from "./ClanWarRow";

export default function ClanWarRanking({
    riverRaceClans,
}: {
    riverRaceClans: RiverRaceClan[];
}) {
    return (
        <CardContainer ariaLabelledBy="clan-ranking-title">
            <CardHeaderContainer>
                <CardTitle titleId="clan-ranking-title">Clan ranking</CardTitle>
                <Image
                    src="/assets/clan.webp"
                    alt="Clan illustration icon"
                    width={80}
                    height={80}
                    className="w-10"
                />
            </CardHeaderContainer>

            <ul className="list">
                {riverRaceClans.map((clan) => (
                    <li
                        key={clan.tag}
                        className={`list-row ${
                            clan.isMyClan && "bg-success-content"
                        }`}
                    >
                        <ClanWarRow clan={clan} />
                    </li>
                ))}
            </ul>
        </CardContainer>
    );
}
