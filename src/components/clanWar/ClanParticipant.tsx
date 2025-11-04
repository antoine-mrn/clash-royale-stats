import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import CardTitle from "../ui/CardTitle";
import Image from "next/image";
import { RiverRaceClan } from "@/types/riverRace.interface";
import ClanParticipantList from "./ClanParticipantList";

export default function ClanParticipant({
    myClan,
}: {
    myClan: RiverRaceClan | undefined;
}) {
    return (
        <CardContainer ariaLabelledBy="clan-participant-title">
            <CardHeaderContainer>
                <CardTitle titleId="clan-participant-title">
                    Participants
                </CardTitle>
                <Image
                    src="/prince-lance.png"
                    alt="Prince lance icon"
                    width={640}
                    height={640}
                    className="w-10"
                />
            </CardHeaderContainer>

            <ClanParticipantList clanParticipant={myClan?.participants} />
        </CardContainer>
    );
}
