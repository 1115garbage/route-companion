export interface SampleRoutePreset {
  id: string;
  title: string;
  description: string;
  stopCount: number;
  gpxXml: string;
}

export const SAMPLE_GPX_ROUTES: SampleRoutePreset[] = [
  {
    id: 'residential-route-springfield',
    title: 'North Springfield Residential Route (20 Stops)',
    description: 'Sequenced customer stops for residential service with distinct house numbers & notes',
    stopCount: 20,
    gpxXml: `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="OsmAnd Route Companion" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>North Springfield Residential Route</name>
    <desc>Customer collection and service route in sequence</desc>
  </metadata>
  <wpt lat="39.7990" lon="-89.6438">
    <name>Eleanor &amp; Frank Davies</name>
    <desc>104 Maple Grove Ave, Springfield, IL 62702</desc>
    <cmt>Side gate accessible, watch for golden retriever</cmt>
  </wpt>
  <wpt lat="39.8005" lon="-89.6450">
    <name>Marcus Vance</name>
    <desc>112 Maple Grove Ave, Springfield, IL 62702</desc>
    <cmt>Bin beside garage, ring bell if blocked</cmt>
  </wpt>
  <wpt lat="39.8018" lon="-89.6462">
    <name>Sophia Ramirez</name>
    <desc>128 Maple Grove Ave, Springfield, IL 62702</desc>
    <cmt>Curbside pickup requested</cmt>
  </wpt>
  <wpt lat="39.8035" lon="-89.6480">
    <name>Dr. Arthur Pendelton</name>
    <desc>215 Willow Creek Rd, Springfield, IL 62702</desc>
    <cmt>Long gravel driveway, turn around at circle</cmt>
  </wpt>
  <wpt lat="39.8049" lon="-89.6495">
    <name>Elena Rostova</name>
    <desc>229 Willow Creek Rd, Springfield, IL 62702</desc>
    <cmt>House number on stone mailbox</cmt>
  </wpt>
  <wpt lat="39.8062" lon="-89.6512">
    <name>Jackson &amp; Maya Miller</name>
    <desc>241 Willow Creek Rd, Springfield, IL 62702</desc>
    <cmt>Yellow house on corner</cmt>
  </wpt>
  <wpt lat="39.8080" lon="-89.6530">
    <name>Robert K. Sterling</name>
    <desc>304 Sycamore Lane, Springfield, IL 62702</desc>
    <cmt>Back alley approach preferred</cmt>
  </wpt>
  <wpt lat="39.8095" lon="-89.6548">
    <name>Hannah &amp; Liam Chen</name>
    <desc>318 Sycamore Lane, Springfield, IL 62702</desc>
    <cmt>Ring doorbell after stop</cmt>
  </wpt>
  <wpt lat="39.8110" lon="-89.6565">
    <name>George Henderson</name>
    <desc>330 Sycamore Lane, Springfield, IL 62702</desc>
    <cmt>Code for gate #4421</cmt>
  </wpt>
  <wpt lat="39.8125" lon="-89.6582">
    <name>Patricia &amp; Carl Kowalski</name>
    <desc>402 Birchwood Court, Springfield, IL 62702</desc>
    <cmt>Cul-de-sac house at end on left</cmt>
  </wpt>
  <wpt lat="39.8138" lon="-89.6601">
    <name>Devon Washington</name>
    <desc>415 Birchwood Court, Springfield, IL 62702</desc>
    <cmt>Leave invoice in mailbox slot</cmt>
  </wpt>
  <wpt lat="39.8152" lon="-89.6618">
    <name>Chloe &amp; Noah Bennett</name>
    <desc>520 Cedar Crest Way, Springfield, IL 62702</desc>
    <cmt>Red brick house with circular portico</cmt>
  </wpt>
  <wpt lat="39.8168" lon="-89.6635">
    <name>Samuel Ortiz</name>
    <desc>534 Cedar Crest Way, Springfield, IL 62702</desc>
    <cmt>Customer works from home, quiet approach</cmt>
  </wpt>
  <wpt lat="39.8182" lon="-89.6652">
    <name>Miriam Goldstein</name>
    <desc>601 Pine Needle Drive, Springfield, IL 62702</desc>
    <cmt>Keycard box next to service door</cmt>
  </wpt>
  <wpt lat="39.8198" lon="-89.6670">
    <name>Thomas &amp; Valerie Reed</name>
    <desc>615 Pine Needle Drive, Springfield, IL 62702</desc>
    <cmt>House number illuminated on porch column</cmt>
  </wpt>
  <wpt lat="39.8215" lon="-89.6690">
    <name>Amina Al-Mansoor</name>
    <desc>722 Juniper Park Blvd, Springfield, IL 62702</desc>
    <cmt>Corner lot with white vinyl fence</cmt>
  </wpt>
  <wpt lat="39.8230" lon="-89.6708">
    <name>Kenneth O'Connor</name>
    <desc>736 Juniper Park Blvd, Springfield, IL 62702</desc>
    <cmt>Please close latch securely</cmt>
  </wpt>
  <wpt lat="39.8248" lon="-89.6725">
    <name>Zoe &amp; Lucas Taylor</name>
    <desc>802 Hawthorn Ridge, Springfield, IL 62702</desc>
    <cmt>Call before arrival if gate locked</cmt>
  </wpt>
  <wpt lat="39.8265" lon="-89.6742">
    <name>Geraldine Brooks</name>
    <desc>818 Hawthorn Ridge, Springfield, IL 62702</desc>
    <cmt>Elderly resident, curbside staging</cmt>
  </wpt>
  <wpt lat="39.8280" lon="-89.6760">
    <name>Victor &amp; Beatrice Moreno</name>
    <desc>834 Hawthorn Ridge, Springfield, IL 62702</desc>
    <cmt>Final customer on morning route block</cmt>
  </wpt>
</gpx>`,
  },
  {
    id: 'commercial-route-metro',
    title: 'Metro Commercial Route (10 Stops)',
    description: 'Commercial facilities, clinics, and businesses with suite numbers',
    stopCount: 10,
    gpxXml: `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="OsmAnd Route Companion" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>Metro Commercial Route</name>
    <desc>Commercial client sequence</desc>
  </metadata>
  <wpt lat="39.7810" lon="-89.6500">
    <name>Apex Medical Labs - Suite 100</name>
    <desc>500 S 6th St, Springfield, IL 62701</desc>
    <cmt>Rear loading dock entrance, press buzzer B</cmt>
  </wpt>
  <wpt lat="39.7835" lon="-89.6520">
    <name>Capitol City Bakery</name>
    <desc>412 E Monroe St, Springfield, IL 62701</desc>
    <cmt>Service alley between 4th &amp; 5th</cmt>
  </wpt>
  <wpt lat="39.7860" lon="-89.6540">
    <name>Heritage Law Offices</name>
    <desc>620 E Adams St, Suite 300, Springfield, IL 62701</desc>
    <cmt>Elevator access to 3rd floor</cmt>
  </wpt>
  <wpt lat="39.7890" lon="-89.6570">
    <name>Lincoln Park Dental Clinic</name>
    <desc>805 N 9th St, Springfield, IL 62702</desc>
    <cmt>Staff entrance on north side</cmt>
  </wpt>
  <wpt lat="39.7920" lon="-89.6600">
    <name>Prairie State Veterinary</name>
    <desc>1120 N Walnut St, Springfield, IL 62702</desc>
    <cmt>Doorbell labeled Delivery/Service</cmt>
  </wpt>
  <wpt lat="39.7950" lon="-89.6630">
    <name>Oak Crest Senior Living</name>
    <desc>1400 W Washington St, Springfield, IL 62702</desc>
    <cmt>Check in at security desk Building A</cmt>
  </wpt>
  <wpt lat="39.7980" lon="-89.6660">
    <name>Green Valley Nursery</name>
    <desc>1850 W Jefferson St, Springfield, IL 62702</desc>
    <cmt>Drive through main gravel yard to warehouse</cmt>
  </wpt>
  <wpt lat="39.8010" lon="-89.6690">
    <name>Westside Auto Diagnostics</name>
    <desc>2204 W Monroe St, Springfield, IL 62704</desc>
    <cmt>Bay 3 entrance, ask for Sal</cmt>
  </wpt>
  <wpt lat="39.8040" lon="-89.6720">
    <name>Midwest Fitness Center</name>
    <desc>2600 S MacArthur Blvd, Springfield, IL 62704</desc>
    <cmt>South equipment dock</cmt>
  </wpt>
  <wpt lat="39.8070" lon="-89.6750">
    <name>Chatham Community Bank</name>
    <desc>3100 S 6th St, Springfield, IL 62703</desc>
    <cmt>Authorized personnel entry only</cmt>
  </wpt>
</gpx>`,
  },
  {
    id: 'fosterville-turnaround-route',
    title: 'Fosterville Rd Turnaround Route (8 Stops)',
    description: 'Fosterville Rd southward stops, turnaround to State Route 90, shared address at 6633 Laraway Rd',
    stopCount: 8,
    gpxXml: `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="OsmAnd Route Companion" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>Fosterville Rd Turnaround Delivery Route</name>
    <desc>Includes Fosterville Rd dead-end turnaround and 6633 Laraway Rd multi-unit delivery</desc>
  </metadata>
  <wpt lat="42.9815" lon="-76.6520">
    <name>Marcus Vance</name>
    <desc>123 Fosterville Rd, Aurelius, NY 13166</desc>
    <cmt>Customer 1: Traveling south along Fosterville Rd</cmt>
  </wpt>
  <wpt lat="42.9770" lon="-76.6524">
    <name>Elena Rostova</name>
    <desc>195 Fosterville Rd, Aurelius, NY 13166</desc>
    <cmt>Customer 2: Furthest south on Fosterville Rd - turn around needed after stop</cmt>
  </wpt>
  <wpt lat="42.9860" lon="-76.6510">
    <name>Randi Hickman II</name>
    <desc>Stop 3 | Customer: Randi Hickman II | Address: 6589 State Route 90</desc>
    <cmt>Customer 3: North of Customer 2, reached by turning around</cmt>
  </wpt>
  <wpt lat="42.9890" lon="-76.6540">
    <name>Corey Skurpski</name>
    <desc>6633 Laraway Rd Apt A, Aurelius, NY 13166</desc>
    <cmt>Shared Address 1 of 2: Multi-unit building entrance A</cmt>
  </wpt>
  <wpt lat="42.9890" lon="-76.6540">
    <name>Mike Suarez</name>
    <desc>6633 Laraway Rd Apt B, Aurelius, NY 13166</desc>
    <cmt>Shared Address 2 of 2: Same coordinates as Apt A</cmt>
  </wpt>
  <wpt lat="42.9720" lon="-76.6380">
    <name>Cynthia Powers</name>
    <desc>556 Clark Street Rd, Aurelius, NY 13166</desc>
    <cmt>Customer 6: Curbside delivery</cmt>
  </wpt>
  <wpt lat="42.9680" lon="-76.6310">
    <name>Ryan Jennings</name>
    <desc>179 Clark Street Rd, Aurelius, NY 13166</desc>
    <cmt>Customer 7: 250 ft driveway setback</cmt>
  </wpt>
  <wpt lat="42.9640" lon="-76.6250">
    <name>Kevin Connelly</name>
    <desc>597 Turnpike Rd, Aurelius, NY 13166</desc>
    <cmt>Customer 8: Final stop on route</cmt>
  </wpt>
</gpx>`,
  },
];
