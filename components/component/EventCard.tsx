import { Calendar, LandPlot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: {
    title: string;
    description: string;
    url: string;
  };
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link href={`/events/${slug}`} id="event-card">
      <Image src={image.url} alt={title} width={300} height={300} />
      <div className="flex flex-row gap-2">
        <LandPlot width={14} height={14} />
        <p>{location}</p>
      </div>
      <p className="title">{title}</p>
      <div className="datetime">
        <Calendar width={14} height={14} />
        <p>{date} at {time}</p>
      </div>
    </Link>
  )
}

export default EventCard
