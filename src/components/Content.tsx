import './Content.css'

export default function Content() {
  return (
    <div className="content-container">
      <article className="content-article">
        <section className="content-section">
          <p className="intro-text">
            Choosing the right bird cage size is crucial for your pet bird's physical health, mental well-being, and overall quality of life. Our comprehensive bird cage size calculator helps you determine the optimal cage dimensions based on your bird's species, size, and housing requirements. Whether you're caring for small finches, medium-sized parrots, or large macaws, proper cage sizing ensures your feathered companion has adequate space for exercise, wing spreading, and natural behaviors.
          </p>
        </section>

        <section className="content-section">
          <h2>Why Proper Bird Cage Sizing Matters</h2>
          <p>
            Avian welfare experts and veterinarians agree that appropriate cage dimensions are fundamental to preventing behavioral problems and health issues in captive birds. Birds require sufficient space to fly, climb, play, and exercise their wings fully without touching the cage bars. Inadequate cage size can lead to obesity, muscle atrophy, feather plucking, aggression, depression, and shortened lifespan. A properly sized bird enclosure allows for natural perching behaviors, foraging activities, and social interaction.
          </p>
          <p>
            When selecting bird housing, consider not just the floor area but also cage height, bar spacing, and overall volume. Different bird species have unique spatial requirements—parrots need horizontal space for climbing and wing exercises, while finches and canaries require length for flying. Our calculator accounts for these species-specific needs, providing minimum cage requirements and recommended aviaries dimensions for optimal bird care.
          </p>
        </section>

        <section className="content-section">
          <h2>How to Use the Bird Cage Calculator</h2>

          <h3>Calculate by Measurements</h3>
          <p>
            If you already own a birdcage or are considering a specific model, use the "By Measurements" mode to input your cage's width, length, and height in centimeters. The calculator instantly computes the floor area in both square meters and square feet, plus the total cage volume. This measurement-based approach helps you verify whether your existing enclosure meets minimum standards or compare different cage options when shopping for bird supplies.
          </p>

          <h3>Calculate by Bird Species</h3>
          <p>
            The "By Bird Species" mode is perfect for determining requirements before purchasing a cage. Select your bird's size category from our comprehensive list covering small birds like budgies and lovebirds to extra-large species including cockatoos and macaws. Enter the number of birds you plan to house—our algorithm automatically adjusts the minimum floor area requirements for multi-bird setups, as keeping multiple birds together requires substantially more space than single-bird housing.
          </p>
          <p>
            You can optionally input your planned cage dimensions to receive immediate feedback on whether the enclosure provides adequate space. The calculator compares your measurements against both minimum floor area requirements and critical dimensional thresholds for width, depth, and height. Color-coded results clearly indicate whether your cage is suitable or needs to be larger.
          </p>
        </section>

        <section className="content-section">
          <h2>Understanding Bird Cage Requirements by Species</h2>

          <h3>Small Birds (Under 20cm)</h3>
          <p>
            Finches, canaries, budgerigars (budgies), and lovebirds fall into the small bird category. Despite their compact size, these active birds need surprising amounts of flight space. Minimum cage dimensions should allow for horizontal flight of at least 60-70cm, with multiple perches at varying heights. Small birds benefit from longer cages rather than tall ones, as they fly horizontally more than they climb vertically.
          </p>

          <h3>Medium Birds (20-40cm)</h3>
          <p>
            Cockatiels, conures, small parrots, and ringneck parakeets require substantially larger enclosures. These intelligent birds are highly active and need space for toys, swings, ladders, and enrichment activities. A minimum floor area of 0.90-1.35 m² provides basic housing, but larger aviaries significantly improve quality of life. Bar spacing should be appropriate to prevent head entrapment while allowing climbing.
          </p>

          <h3>Large Birds (40cm and Above)</h3>
          <p>
            African grey parrots, Amazon parrots, cockatoos, and macaws are substantial birds requiring premium housing solutions. These species have powerful beaks, long wingspans, and high intelligence levels demanding extensive space and mental stimulation. Minimum cage requirements start at 2.0 m² for medium-large parrots, increasing to 5.0 m² or more for the largest macaw species. Height becomes increasingly important for large parrots who enjoy climbing and hanging behaviors.
          </p>
        </section>

        <section className="content-section">
          <h2>Essential Bird Cage Features Beyond Size</h2>
          <p>
            While dimensions are critical, several other factors contribute to optimal bird housing. Bar spacing must match your bird's size—too wide risks entrapment, too narrow prevents climbing. Horizontal bars facilitate climbing for parrots and hookbills. Cage material should be non-toxic, with powder-coated or stainless steel construction preferred over zinc or lead-containing metals that cause avian poisoning.
          </p>
          <p>
            Proper cage setup includes multiple perches of varying diameters and materials to promote foot health and prevent bumblefoot. Position food and water dishes away from perches to avoid contamination. Include enrichment items like foraging toys, swings, mirrors (for social species), and chewing materials. Easy access doors simplify cleaning and bird handling, while removable tray bottoms facilitate daily maintenance.
          </p>
        </section>

        <section className="content-section">
          <h2>Aviary Housing for Multiple Birds</h2>
          <p>
            When housing multiple birds together, space requirements increase exponentially, not linearly. Each additional bird needs supplemental floor area to establish territory, access resources, and avoid conflicts. Flight aviaries or walk-in enclosures provide the ultimate housing solution for bird collections, allowing natural flock behaviors, extended flight, and complex social interactions. Outdoor aviaries must include weatherproof shelters, predator protection, and appropriate vegetation.
          </p>
        </section>

        <section className="content-section disclaimer">
          <h3>Important Considerations</h3>
          <p>
            This bird cage calculator provides minimum recommended dimensions based on widely accepted avian welfare standards. Individual birds may have different needs based on activity level, health status, and behavioral characteristics. Consult with an avian veterinarian or certified bird behavior consultant for personalized advice. Remember that bigger is always better when it comes to bird cages—these minimums represent the smallest acceptable housing, not ideal conditions. Whenever possible, provide the largest cage your space and budget allow, and supplement cage time with supervised out-of-cage exercise periods for optimal bird health and happiness.
          </p>
        </section>
      </article>
    </div>
  )
}
