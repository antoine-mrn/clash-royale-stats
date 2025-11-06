import CardContainer from "../shared/CardContainer";
import CardHeaderContainer from "../shared/CardHeaderContainer";
import CardTitle from "../ui/CardTitle";
import Image from "next/image";
import { RiverRaceClan } from "@/types/riverRace";
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
                    src="/assets/prince-lance.webp"
                    alt="Prince's lance icon"
                    width={80}
                    height={80}
                    className="w-10"
                />
            </CardHeaderContainer>

            <ClanParticipantList clanParticipant={myClan?.participants} />
        </CardContainer>
    );
}
