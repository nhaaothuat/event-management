import EventCard from "@/components/component/EventCard";
import ExploreBtn from "@/components/component/ExploreBtn";
import event from "@/data/MOCK_DATA.json";



export default function Home() {
  return (
    <section className="pt-15">
      <h1 className="text-center">The Hub for Every Dev<br /> Event you can&apos;t miss</h1>
      <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in one place</p>
      <ExploreBtn />
      <div className="mt-20 space-y-7 mx-8">
        <h3> Features Events</h3>
        <ul className="events">
          {
            event.slice(0,12).map((event) => (
              <li key={event.id}> 
              <EventCard {...event}/>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}
