import EventCard from "@/components/component/EventCard";
import ExploreBtn from "@/components/component/ExploreBtn";


const event = [
  {
    image:"/assets/images.jpg", title:"Event 1",slug:'event-1',location:'location-1',date:'Date-1',time:'Time-1'
  },
  {
    image:"/assets/images2.jpg", title:"Event 2",slug:'event-2',location:'location-2',date:'Date-2',time:'Time-2'
  }
]

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
            event.map((event) => (
              <li key={event.title}> 
              <EventCard {...event}/>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}
