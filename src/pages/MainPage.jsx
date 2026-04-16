import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import app11Image from '../assets/app1_1.png'
import app12Image from '../assets/app1_2.png'
import app13Image from '../assets/app1_3.png'
import app14Image from '../assets/app1_4.png'
import app15Image from '../assets/app1_5.png'
import app16Image from '../assets/app1_6.png'
import app17Image from '../assets/app1_7.png'
import app18Image from '../assets/app1_8.png'
import app21Image from '../assets/app2_1.png'
import app22Image from '../assets/app2_2.png'
import app23Image from '../assets/app2_3.png'
import app24Image from '../assets/app2_4.jpg'
import app25Image from '../assets/app2_5.png.webp'
import app26Image from '../assets/app2_6JPG.JPG'
import app27Image from '../assets/app2_7.png'
import app31Image from '../assets/app3_1.png'
import app32Image from '../assets/app3_2.jpg'
import app33Image from '../assets/app3_3.png'
import app34Image from '../assets/app3_4.jpg'
import app35Image from '../assets/app3_5.jpg'
import app36Image from '../assets/app3_6.jpg'
import app37Image from '../assets/app3_7.jpg'
import app38Image from '../assets/app3_8.jpg'
import app39Image from '../assets/app3_9.jpg'
import app310Image from '../assets/app3_10.jpg'
import app311Image from '../assets/app3_11.webp'
import app41Image from '../assets/app4_1.jpg'
import app42Image from '../assets/app4_2.jpg'
import app43Image from '../assets/app4_3.png'
import app44Image from '../assets/app4_4.jpg'
import app45Image from '../assets/app4_5.jpg'
import app46Image from '../assets/app4_6.jpg'
import app47Image from '../assets/app4_7.png'
import app48Image from '../assets/app4_8.jpg'
import app49Image from '../assets/app4_9.png'
import app51Image from '../assets/app5_1.jpg'
import app52Image from '../assets/app5_2.jpg'
import app53Image from '../assets/app5_3.jpg'
import app54Image from '../assets/app5_4.jpg'
import app55Image from '../assets/app5_5.jpg'
import app56Image from '../assets/app5_6.jpg'
import app57Image from '../assets/app5_7.jpg'
import app58Image from '../assets/app5_8.png'
import app59Image from '../assets/app5_9.jpg'
import app510Image from '../assets/app5_10.jpg'
import app511Image from '../assets/app5_11.jpg'
import app512Image from '../assets/app5_12.jpg'
import app513Image from '../assets/app5_13.jpg'
import app514Image from '../assets/app5_14.jpg'
import applePhotosIcon from '../assets/apple photos.png'
import applePhotosLineIcon from '../assets/apple photos_line.png'
import youtubeMusicIcon from '../assets/youtube music.png'
import youtubeMusicLineIcon from '../assets/youtube music_line.png'
import googleMapsIcon from '../assets/google maps.png'
import googleMapsLineIcon from '../assets/google maps_line.png'
import instagramIcon from '../assets/instagram.png'
import instagramLineIcon from '../assets/instagram_line.png'
import nikeIcon from '../assets/nike.png'
import nikeLineIcon from '../assets/nike_line.png'

const BOOK_ICON_BY_ID = {
  'book-1': applePhotosIcon,
  'book-2': youtubeMusicIcon,
  'book-3': googleMapsIcon,
  'book-4': instagramIcon,
  'book-5': nikeIcon,
}

const TARGET_BOOKS = [
  {
    id: 'book-1',
    slotId: 't2',
    title: 'Apple Photos - Memories',
    pages: [
      {
        title: 'The Gateway to Past',
        content:
          "'Memories' feature of the Apple Photos app is placed at the very top of the app's Collections tab, providing very high visibility and discoverability. The 'Dynamic Previews' that users encounter as soon as they open the app display fragments of the past in a slideshow format even before clicking, strongly encouraging (affording) entry into memories we had forgotten.",
        imageSrc: app11Image,
        imageAlt: 'Apple Photos Memories dynamic preview screen',
        imageCaption:
          'The appearance of Collections tab. Memories menu is located at the very top.',
      },
      {
        title: 'The Logic of Black Box',
        content:
          'The more you look into memories, the more opaque the logic becomes. The system exhibits an opaque hierarchy whose criteria for prioritizing certain memories are unknown. While some trips are grouped broadly, some days are fragmented. This inconsistent data grouping hinders users from forming a mental model of the system\'s sorting criteria and causes cognitive confusion.',
        images: [
          {
            src: app12Image,
            alt: 'Apple Photos European trip grouping',
          },
          {
            src: app13Image,
            alt: 'Apple Photos Japan trip fragmentation',
          },
        ],
        imageCaption:
          'The long European trip from March 1 to 9, 2025, was combined with Germany and Austria, but the Japan trip from June 29 to July 3, 2025, was divided into separate days such as Osaka City on June 29, 2025, and Kyoto City on July 3, 2025.',
      },
      {
        title: 'Lost in Semantics',
        content:
          'GPS and facial recognition metadata-based naming methods show vulnerabilities. While specific locations are designated with precise place names, other data of similar nature are treated with ambiguous common nouns. The absence of such naming rules undermines the system\'s consistency and, consequently, negatively impacts the system reliability, which is the user\'s trust in the system\'s intelligence. Additionally, categories like "Memories Together (2023~2024)" lack clear generation rules. It is unclear why only 29 photos out of numerous military service period portraits were selected, making the conceptual model provided by the system to the user ambiguous.',
        images: [
          {
            src: app14Image,
            alt: 'Apple Photos metadata-based naming inconsistency example 1',
          },
          {
            src: app15Image,
            alt: 'Apple Photos metadata-based naming inconsistency example 2',
          },
        ],
        imageCaption:
          'One album is titled specifically as "Grand Canyon Exploration," while another from Pokhara, Nepal is vaguely titled "Exploration," failing to utilize available location data for the title.',
      },
      {
        title: 'Interaction & Aesthetic Trade-offs',
        content:
          'The memory playback interface supports both portrait and landscape modes, providing a fullscreen immersive experience synchronized with background music. However, the system forms a trade-off relationship between information integrity and aesthetic consistency to maximize this aesthetic consistency. To enforce a 16:9 fullscreen aspect ratio, the system arbitrarily crops photos and videos that do not match this ratio. While the automatic direction synchronized with the music and tempo may enhance visual satisfaction, it causes side effects such as the loss of key subjects or compositional details within the photos.',
        images: [
          {
            src: app16Image,
            alt: 'Original photo before memory playback crop',
          },
          {
            src: app17Image,
            alt: 'Cropped photo shown in memory playback slideshow',
          },
        ],
        imageCaption:
          'Original photo (left) and actual capture of the cropped photo in the memory playback slideshow (right)',
      },
      {
        title: 'The Limits of Intelligent Systems',
        content:
          "While Natural Language Processing (NLP) via Siri accurately handles spatio-temporal queries like 'Last Summer' or 'Outing in D.C.,' it reveals critical logical flaws in complex contextual understanding. For instance, a prompt of 'Dining' often suffers from contextual misunderstanding, including portrait-heavy photos simply because food is present in the background. Most notably, the system's negation failure-such as returning only 2024 content when explicitly asked to 'exclude 2024'-represents a significant breakdown in user intent matching.",
        imageSrc: app18Image,
        imageAlt: 'Korean version memory video creation feature interface',
        imageCaption: 'Korean Version Memory Video Creation Feature Interface',
      },
    ],
  },
  {
    id: 'book-2',
    slotId: 't5',
    title: 'YouTube Music - Recap',
    pages: [
      {
        title: 'Discoverability & Contextual Guidance',
        content:
          'The Recap feature of YouTube Music exhibits characteristics of hidden affordance in its interface design. Although the feature exists, it is deeply nested under the profile menu, lacking sufficient visual signifiers for users to discover it. As a result, its discoverability is significantly reduced during regular use. To address this, the system employs just-in-time prompts in the form of pop-ups at specific times, such as the end of the year or the end of a season. This acts as a context-based UI strategy that compensates for low visibility and encourages user engagement.',
        images: [
          {
            src: app21Image,
            alt: 'YouTube Music recap hidden inside profile menu',
            caption:
              'The recap feature is placed deep within the profile menu, resulting in significantly low discoverability until users explicitly navigate to it.',
          },
          {
            src: app22Image,
            alt: 'YouTube Music recap seasonal banner prompt',
            caption:
              'To compensate for the usual low discoverability, a context-based UI strategy is employed by displaying a banner at the top of the home screen during specific seasons, instantly making the hidden feature visible and encouraging user engagement.',
          },
        ],
      },
      {
        title: 'Volatility of Digital Memories',
        content:
          "Unlike other services that preserve records going back several years to provide users with a chronological collection of memories, YouTube Music's Recap has a short retention period measured in years. In particular, as of April 2026, it was observed that with the appearance of the latest Recap, past records are replaced and disappear, which is disappointing in terms of data continuity. This does not fully meet the system reliability model of users who expect continuous records as a digital archive and becomes a factor that limits long-term data utilization.",
        imageSrc: app23Image,
        imageAlt: 'YouTube Music recap retention and replacement behavior',
        imageCaption:
          'Recap main screen. Unlike just a month ago when it was possible to access the full 2025 recap and the 2025 recap from September to November, currently only the recap from December to February is accessible.',
      },
      {
        title: 'Interaction Psychology & Information Flow',
        content: [
          'YouTube Music Recap enhances the user experience through gamification and thoughtful interaction design. By showing insights like a “Top 2% Listener” label for a particular artist, the system reinforces the user\'s sense of relatedness by linking them to others, while also driving the need for competence to reach even higher ranks-creating a strong incentive to share with friends.',
          'At the same time, while the automated story format offers a seamless flow, the high information density relative to short dwell times can increase cognitive load. To help with this, the system includes an “escape hatch” via the “long-press to pause” gesture, giving users the level of control they need. In addition, by combining album artwork with track titles on screen, the design promotes recognition rather than recall, which reduces the mental effort required.',
          'However, there\'s still a clear lack of granularity compared to its simple UI. Beyond telling users what they listened to, the lack of deeper contextual feedback-such as when their peak listening occurred-makes it harder for the system to build a more detailed narrative of the user\'s “musical journey.”',
        ],
        images: [
          {
            src: app24Image,
            alt: 'YouTube Music recap screen showing top 5 genres',
            caption:
              "One of the recap screenshots. it shows the user's top 5 music genres they have listened to. The user can save this information to their device or share it with others.",
          },
          {
            src: app25Image,
            alt: 'YouTube Music recap top listener percentage for an artist',
            caption:
              'A photo showing the percentage of top listeners a user is for a specific artist during a recap.',
          },
        ],
      },
      {
        title: 'Multimodal Association',
        content: [
          'YouTube Music attempts to advance multimodal interaction by integrating with Google Photos to create "music photo albums," combining auditory and visual memories. However, the heuristics of the system that matches specific photos to specific songs remain opaque, often causing frequent conceptual mismatches. For example, placing a static sunset photo alongside an energetic girl group track results in a clash between the auditory affordance of the music and the visual tone.',
          'To compensate for the limitations of this automation, the provided "photo change (Random Shuffle)" feature functions as a mechanism that guarantees minimal user control. However, since it is not a precise manual control tool that allows users to directly select specific photos they want, there are functional constraints that prevent full intervention in the memory reconstruction proposed by the system.',
        ],
        imageSrc: app26Image,
        imageAlt: 'YouTube Music music photo album with mismatched visual tone',
        imageCaption:
          "An actual music photo album. It combines three photos with bright and a refreshing pop dance girl group song. If you ask whether the photos match the mood of the song, well, I'm not sure.",
      },
      {
        title: 'Linguistic Inequality in AI Interaction',
        content:
          "The YouTube Music system reveals a serious availability issue in terms of accessibility by determining the provision of core interaction tools based on the user's language settings. In the English setting environment, it offers an interactive interface that allows users to actively explore their music data through the 'Ask about Recap' feature linked with Gemini AI. However, in other language settings, including Korean, such AI-based analytical tools are completely excluded, providing only a simple static list of results.",
        images: [
          {
            src: app23Image,
            alt: 'YouTube Music English recap with Ask about Recap AI feature',
          },
          {
            src: app27Image,
            alt: 'YouTube Music Korean recap without AI ask feature',
          },
        ],
        imageCaption:
          'In the English version (left), there is a feature under the recap that allows users to ask the AI about their listening history, but in the Korean version (right), that feature is missing, and it goes directly from the recap to the music photo album.',
      },
    ],
  },
  {
    id: 'book-3',
    slotId: 't8',
    title: 'Google Maps - Timeline',
    pages: [
      {
        title: 'The Buried Map of Memories',
        content:
          'The timeline feature of Google Maps is hidden deep within the interface design (You -> Scroll down), which reduces its discoverability. Such a deep entry path becomes a barrier that prevents users with low technical proficiency from even realizing the existence of this comprehensive digital diary. This results in the system\'s powerful functionality being concealed from users themselves.',
        imageSrc: app31Image,
        imageAlt: 'Google Maps You menu with Timeline entry near the bottom',
        imageCaption:
          'The interface of the You menu in Google Maps. After accessing the You menu, users have to scroll all the way down to finally see the button that allows them to access the timeline.',
      },
      {
        title: 'Micro-Level Precision: Day View',
        content:
          'The day view of Google Maps Timeline provides visibility of system status maximized at a micro level. It visualizes the exact routes traveled, modes of transportation, and time spent down to the minute, perfectly reconstructing the user\'s past physical movements. In particular, when there are errors in the places or transportation modes identified by the system, it offers a direct manipulation environment where users can immediately make corrections. This is a key design that enhances user control and freedom by allowing users to compensate for the limitations of system automation. Additionally, proactive feedback-such as asking "Did you visit this place?" regarding uncertain data-functions as a clever interaction heuristic that improves data accuracy through user confirmation.',
        images: [
          {
            src: app32Image,
            alt: 'Google Maps Timeline day view route reconstruction',
            caption: 'It perfectly recreates the user\'s route for that day.',
          },
          {
            src: app33Image,
            alt: 'Google Maps Timeline prompt asking whether user visited Tompson Library',
            caption:
              'By using a prompt like "Visited Tompson Library?" to ask about the most likely place, it ensures user control while simultaneously reducing the burden on the user to recall which place they visited that day.',
          },
          {
            src: app34Image,
            alt: 'Google Maps Timeline missing visit and manual correction interface',
            caption:
              'For locations that the app did not recognize, it clearly alerts the user with the explicit message "Missing visit" and emphasizes it with a red color, making it clear that the user needs to manually correct the record, thereby enabling user cognition. Even for locations recognized by the app, it allows the user to directly edit them, maximizing user control.',
          },
        ],
      },
      {
        title: 'Macro-Level Narrative: Insights',
        content: [
          "Insights provides a summary of the user's movement patterns from a macro perspective. In particular, the 'Highlight' feature, which extracts and displays meaningful activities during a specific period, is a positive interaction that transforms the user's experience into a data-driven narrative. For example, a summary stating that the user visited nine museums in March helps clearly identify the core theme of 'travel' amid scattered movement records.",
          "However, the ambiguous boundaries set in the information classification system-such as between 'attractions,' 'culture,' and 'sports'-may not align with the mental model users expect. Additionally, while the design shows trends over six months through bar graphs, the omission of specific numerical data hinders the utility for users who desire precise data analysis. Although the numbers for individual months can be checked, the lack of a comparison function to analyze and contrast figures between different months is a limitation that reduces the efficiency of data utilization.",
        ],
        images: [
          {
            src: app35Image,
            alt: 'Google Maps Insights movement statistics by category',
            caption:
              'Statistics related to movement in Insights. It provides detailed information by category on how many kilometers were traveled and how many hours were spent moving.',
          },
          {
            src: app36Image,
            alt: 'Google Maps Insights place statistics and category ambiguity',
            caption:
              'Statistics related to the places visited in Insights. It shows how many places were visited and how much time was spent at each category. However, for example, a place like "Yankee Stadium," which is a local attraction, a cultural site, and a sports venue, it is not clear under which category this place should be classified.',
          },
          {
            src: app37Image,
            alt: 'Google Maps Insights highlights at the bottom of the page',
            caption:
              'At the very bottom of Insights, there is Highlights. It first provides the distinctive visits in text form, and if the user wants, they can click See visits to view it immediately.',
          },
        ],
      },
      {
        title: 'Navigation and Filtering Constraints',
        content:
          "The 'Places, Cities, World' views of the timeline show the user's global movement trajectory, but they reveal clear limitations in terms of flexibility in information exploration. In particular, the absence of a feature to filter data by a specific date or a user-defined custom timeframe is a major constraint that restricts flexibility and efficiency of use. Users have to sift through the vast entire record chronologically or alphabetically just to find a record from a specific point in time they want, which increases the cognitive effort required to access the data.",
        images: [
          {
            src: app38Image,
            alt: 'Google Maps timeline Places tab sorting options',
          },
          {
            src: app39Image,
            alt: 'Google Maps timeline Cities tab sorting options',
          },
          {
            src: app310Image,
            alt: 'Google Maps timeline World tab sorting options',
          },
        ],
        imageCaption:
          'Screenshot of the Places, Cities, World tab. Even when pressing Sort by, only Places can be sorted by Most recent or Most visited, while the others can only be sorted by Most recent or Alphabetically.',
      },
      {
        title: 'The Paradox of Convenience',
        content: [
          'Google Maps Timeline demonstrates an extreme trade-off in user experience. Continuous 24-hour background location tracking offers the immense convenience of automated record-keeping, but at the same time involves issues of ethical design that provoke psychological discomfort related to privacy concerns, known as the Creepy Factor. Additionally, the ongoing battery consumption required for precise GPS logging acts as a clear physical constraint that prevents users from using their devices smoothly.',
          'Nevertheless, this system drastically reduces cognitive load by perfectly reconstructing the user\'s past without any active effort to record it. It functions as a powerful external memory device that supports the user\'s recollection beyond a simple tool, providing overwhelming utility to users who prioritize the value of memories over the effort of recording them.',
        ],
        imageSrc: app311Image,
        imageAlt:
          'Digital privacy concern statistics related to online personal data safety in 2024',
        imageCaption:
          'Are Americans concerned about the safety and privacy of their online personal data? (2024): 73% of Americans express concerns about providing personal information online, which supports the psychological and ethical barriers faced by automatic tracking systems such as Google Maps Timeline. (Source: Checkr, State of Digital Privacy and Safety 2024; Data from a proprietary survey of 3,000 Americans)',
      },
    ],
  },
  {
    id: 'book-4',
    slotId: 'b3',
    title: 'Instagram - Archive',
    pages: [
      {
        title: 'Navigation Paths & Mental Model Alignment',
        content: [
          "Instagram's Archive is located somewhat deep within the layers under 'Profile -> Settings and Activity,' but considering that it is an auxiliary navigation feature rather than a main function, it demonstrates an appropriate information hierarchy that does not disrupt the user's primary flow. It provides a reasonable entry path to satisfy the intermittent desire to look back on past records.",
          "However, the functional distinction between the 'Archive' menu and the 'Your activity' menu is ambiguous, which may cause confusion in the user's mental model. Both menus provide access routes to user-generated content, but there is a lack of clear visual differentiation regarding which specific content belongs where (e.g., archived stories vs. managing current posts). This conceptual overlap results in unnecessary navigation costs, as users may have to switch back and forth between the two menus to find specific records.",
        ],
        imageSrc: app41Image,
        imageAlt: 'Instagram settings and activity menu with Archive entry',
        imageCaption: 'Settings and activity menu',
      },
      {
        title: 'Navigation Logic & Visual Language',
        content: [
          "Instagram Story Archive adopts a vertical scroll method, perfectly aligning with the user's mental model. Scrolling upward moves toward the past, while scrolling downward leads to the most recent data, following the temporal grammar typical of standard calendar apps and minimizing cognitive confusion.",
          "At the same time, the icon design of the top tabs strikes a balance between intuitiveness and originality. The calendar and map tabs use resemblance icons modeled after real objects to facilitate immediate recognition. In contrast, the arbitrary icons representing 'All Stories' and 'Highlights' rotate clockwise and transition from solid to dotted lines, using a circular metaphor to visually express the ephemeral nature of stories-an excellent design solution. Additionally, visual variations using the presence or absence of a 'heart' icon elegantly convey the functional difference between the entire archive and selected highlights while maintaining aesthetic consistency.",
        ],
        images: [
          {
            src: app42Image,
            alt: 'Instagram Archive all stories chronological layout view',
          },
          {
            src: app43Image,
            alt: 'Instagram Archive tab icons for all stories and highlights',
          },
        ],
        imageCaption:
          'All Stories layout of Archive. The stories are arranged from oldest at the top to newest at the bottom.',
      },
      {
        title: 'Spatiotemporal Triggers & User Agency',
        content: [
          "Instagram Story Archive cleverly utilizes spatiotemporal data to strongly aid users in recalling their memories. The calendar view borrows the familiar calendar format, providing an excellent design that allows users to intuitively and immediately grasp 'when' stories were posted. Additionally, the map view serves as a powerful contextual memory trigger by anchoring visual content to specific geographic locations, evoking the spatial context of the moment beyond simply viewing photos.",
          'However, some limitations are observed in terms of interaction design. In the calendar view, only the first story of a given date is shown as a thumbnail, making it difficult to estimate the actual amount of posted data in advance. Also, the map view only displays posts where users have manually attached location stickers, increasing the tasks users must perform to specify locations. Especially for users unaware of the logic that only posts with location tags appear on the map, this lack of understandability within accessibility leads to unintended loss of spatial history.',
          "Paradoxically, unlike Google Maps' automatic tracking method, this design guarantees user control by allowing users to decide whether to provide their location data. This reduces privacy concerns and strengthens user agency, making it a positive design choice.",
        ],
        images: [
          {
            src: app44Image,
            alt: 'Instagram Stories archive calendar view',
            caption: 'Calendar view of Stories archive',
          },
          {
            src: app45Image,
            alt: 'Instagram Stories archive map view',
            caption: 'Map view of Stories archive',
          },
          {
            src: app46Image,
            alt: 'Instagram story with Osaka location sticker attached',
            caption: 'A story with a location sticker (Osaka) attached.',
          },
        ],
      },
      {
        title: 'Privacy & Data Management',
        content: [
          "The post archive feature offers users the option to 'archive' instead of 'delete,' providing user agency and psychological safety. This helps preserve the emotional value of content while managing a public persona.",
          'However, the complete lack of search and filtering functions can be a burden in terms of efficiency of use. The structure that requires users to navigate years of accumulated posts solely through a single scrolling list increases cognitive load as the archive grows.',
        ],
        imageSrc: app47Image,
        imageAlt: 'Instagram posts archive layout in profile grid format',
        imageCaption: 'Posts archive layout. The same layout as the profile post layout is provided.',
      },
      {
        title: 'The Harmony of Ephemerality and Persistence',
        content: [
          'Instagram Story Archive possesses a powerful permanence behind the ephemeral feature of sharing everyday moments that last only 24 hours. From the moment users start using the service up to the present, it preserves all records. Through this, users can share fleeting daily life lightly with others while personally having a permanent digital autobiography that allows them to look back on the trajectory of their lives at any time.',
          "In particular, the 'likes' that remain unchanged within the archive act as social residuals. This forms a permanent social feedback loop that is not limited to the time when the post was created, reinforcing the positive emotions of that time whenever the past records are revisited. Additionally, the efficient interface that allows stored records to be instantly reorganized into 'highlights' smoothly connects the process of transforming deeply private memories into public curation.",
          "As a result, Instagram harmoniously designs the conflicting values of the 'ephemerality' of communication and the 'archiving' of records, providing users with both a sense of connection in the present and continuity with the past.",
        ],
        images: [
          {
            src: app48Image,
            alt: 'Instagram stories archive preserving records from April 2019 to present',
            caption:
              'A long time has passed, but all the stories from April 2019, when the user first posted a story, up to the present are all preserved.',
          },
          {
            src: app49Image,
            alt: 'Instagram story archive showing likes remain while viewers disappear after 24 hours',
            caption:
              'After 24 hours, the people who viewed the story disappear, but the people who liked the story remain.',
          },
        ],
      },
    ],
  },
  {
    id: 'book-5',
    slotId: 'b7',
    title: 'Nike Run Club - Activity',
    pages: [
      {
        title: 'Persistent Visibility & Navigation',
        content:
          "The 'Activity' tab of NRC is fixed at the far right of the bottom navigation bar, ensuring high discoverability. This serves as an intuitive entry point that helps users frequently check their exercise performance and stay motivated. The design, which allows easy access to their progress anytime and anywhere, is a key structural feature of the system that encourages the formation of continuous exercise habits.",
        imageSrc: app51Image,
        imageAlt: 'Nike Run Club main page with Activity section at bottom right',
        imageCaption: 'Nike Run Club main page. The Activity section is fixed at the bottom right corner.',
      },
      {
        title: 'Hierarchical Modality & Mental Models',
        content: [
          "The activity records of NRC are systematically grouped through a hierarchical structure of 'Week / Month / Year / All.' This functions not merely as a simple period summary but as a 'collection of activities for a specific period,' providing users with a logical framework to explore their learning logs by time period and enhancing their cognition. In the 'Year' or 'All' views, the graphs display only monthly or yearly totals to ensure visual simplicity, but upon entering the detailed page, individual running records can be immediately checked, demonstrating an excellent mental model design that balances the macroscopic flow and microscopic details.",
          "However, there is a clear limitation in the navigation design. The design in the 'Week' view, which only exposes records up to 4 weeks prior, prevents users from freely exploring data from earlier weeks without going through the 'Month' tab. This enforces the interaction flow by the system, acting as a temporal constraint that limits user control and freedom by restricting the ability to instantly move to the desired point in time.",
        ],
        images: [
          {
            src: app52Image,
            alt: 'NRC activity interface week view',
          },
          {
            src: app53Image,
            alt: 'NRC activity interface month view',
          },
          {
            src: app54Image,
            alt: 'NRC activity interface year view',
          },
          {
            src: app55Image,
            alt: 'NRC activity interface all view',
          },
        ],
        imageCaption: "Activity's Week / Month / Year / All interface.",
      },
      {
        title: 'Layered Visualization & Contextual Recall',
        content: [
          "NRC harmoniously visualizes quantitative figures and qualitative spatial data to record users' activities from multiple perspectives. The consistent visual language using bar graphs effectively conveys overall running patterns, and the progressive disclosure method-where detailed information (distance, time, frequency) is revealed only when tapping on the graph bars-reduces initial cognitive load while encouraging in-depth data exploration, making it an efficient design. Additionally, the high scannability in the recent activity list, which immediately displays mini maps, dates, and paces, allows users to grasp key information without extra clicks, maximizing efficiency of use.",
          "The visualization of such numerical data becomes even more valuable when combined with spatial data like detailed GPS maps. Maps that show the unique \"shape\" of running routes act as powerful contextual memory triggers that vividly reconstruct the physical environment and personal effort during exercise, going beyond simple numbers. This proves that NRC's archiving is more than just a log of workouts; it is a valuable record of experience that preserves users' physical experiences in space and time.",
        ],
        images: [
          {
            src: app56Image,
            alt: 'NRC activity graph requiring tap for detailed run data',
          },
          {
            src: app57Image,
            alt: 'NRC graph interaction showing detailed running information on tap',
            rowCaption:
              'Users need to click on the graph to see detailed information about the running record corresponding to the bar graph.',
          },
          {
            src: app58Image,
            alt: 'NRC detailed running screen with Avg. Pace, Time, and Calories at top',
            caption:
              "When entering the detailed running information, the most important information, Kilometers, is displayed largest at the top, with Avg. Pace, Time, Calories, etc. shown below. This demonstrates the app's appropriate information hierarchy setting.",
          },
          {
            src: app59Image,
            alt: 'NRC detailed running route map interface',
            caption:
              'The running route map, which can be said to be the most distinctive feature of Nike Run Club. It also shows which section user ran per kilometer and visualizes Avg. Pace, Elevation, etc., displaying them as graphs below the map.',
          },
        ],
      },
      {
        title: 'Gamification Loop & System Inconsistency',
        content: [
          "NRC forms a powerful gamification loop that 'levels up' the user's physical identity through a cumulative distance-based color level system. Additionally, the trophies and achievement icons awarded upon reaching each milestone serve as immediate and positive feedback, strongly driving continuous user engagement. This generates the IKEA effect for users, fostering affection for their own efforts and accomplishments.",
          "However, there is a minor issue that weakens this excellent reward system experience. While the main activity list displays the earned achievement icons, providing visual satisfaction, the detailed view of the respective run lacks information indicating which milestones have been achieved. This disconnect in information can be seen as a lack of efficiency that hinders users from easily verifying their accomplishments. Nevertheless, NRC’s archiving holds unique value in that it digitizes physical activity as digital assets, visually constructing the user's growth narrative.",
        ],
        images: [
          {
            src: app510Image,
            alt: 'Nike Run Club run level and achievement progress screen',
          },
          {
            src: app511Image,
            alt: 'Nike Run Club achievement details screen',
          },
          {
            src: app512Image,
            alt: 'Nike Run Club another achievement detail screen',
            rowCaption:
              "The Nike Run Club's Run Level system and Achievements system inform users about how many more kilometers they need to run to level up, when they have achieved an achievement, and the details of the achievement.",
          },
          {
            src: app513Image,
            alt: 'Nike Run Club activity main screen with achievement badges',
          },
          {
            src: app514Image,
            alt: 'Nike Run Club recent achievements and missing achievement details',
            rowCaption:
              'On the Activity main screen, users can see badges for achievements earned in that running session, as well as the top 5 most recently achieved accomplishments. However, the running detail page does not contain any information about achievements.',
          },
        ],
      },
    ],
  },
]

const SHELF_SLOTS = [
  { id: 't1', shelf: 'top', h: 144, tone: 'tone-1' },
  { id: 't2', shelf: 'top', h: 150, tone: 'tone-2' },
  { id: 't3', shelf: 'top', h: 138, tone: 'tone-3' },
  { id: 't4', shelf: 'top', h: 146, tone: 'tone-4' },
  { id: 't5', shelf: 'top', h: 152, tone: 'tone-5' },
  { id: 't6', shelf: 'top', h: 140, tone: 'tone-2' },
  { id: 't7', shelf: 'top', h: 148, tone: 'tone-1' },
  { id: 't8', shelf: 'top', h: 144, tone: 'tone-3' },
  { id: 't9', shelf: 'top', h: 154, tone: 'tone-4' },
  { id: 't10', shelf: 'top', h: 142, tone: 'tone-5' },
  { id: 'b1', shelf: 'bottom', h: 152, tone: 'tone-3' },
  { id: 'b2', shelf: 'bottom', h: 146, tone: 'tone-1' },
  { id: 'b3', shelf: 'bottom', h: 150, tone: 'tone-4' },
  { id: 'b4', shelf: 'bottom', h: 141, tone: 'tone-5' },
  { id: 'b5', shelf: 'bottom', h: 154, tone: 'tone-2' },
  { id: 'b6', shelf: 'bottom', h: 145, tone: 'tone-3' },
  { id: 'b7', shelf: 'bottom', h: 151, tone: 'tone-4' },
  { id: 'b8', shelf: 'bottom', h: 143, tone: 'tone-1' },
  { id: 'b9', shelf: 'bottom', h: 152, tone: 'tone-5' },
  { id: 'b10', shelf: 'bottom', h: 146, tone: 'tone-2' },
]

function MainPage({ onRestart }) {
  const [collectedOrbIds, setCollectedOrbIds] = useState([])
  const [activeBookId, setActiveBookId] = useState(null)
  const [activePage, setActivePage] = useState(0)
  const [scene, setScene] = useState('library')
  const [doorPopup, setDoorPopup] = useState(null)
  const [keyObtained, setKeyObtained] = useState(false)
  const [passwordPopup, setPasswordPopup] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordMessage, setPasswordMessage] = useState(null)
  const monitorScrollRef = useRef(null)
  const monitorScrollbarRef = useRef(null)
  const [isMonitorScrollbarDragging, setIsMonitorScrollbarDragging] = useState(false)
  const [monitorScrollbar, setMonitorScrollbar] = useState({
    thumbSize: 100,
    thumbOffset: 0,
    scrollTop: 0,
    scrollMax: 0,
  })

  const syncMonitorScrollbar = useCallback(() => {
    const contentEl = monitorScrollRef.current

    if (!contentEl) {
      return
    }

    const scrollMax = Math.max(contentEl.scrollHeight - contentEl.clientHeight, 0)
    const thumbSize =
      scrollMax === 0
        ? 100
        : Math.max((contentEl.clientHeight / contentEl.scrollHeight) * 100, 18)
    const maxThumbOffset = 100 - thumbSize
    const thumbOffset =
      scrollMax === 0 ? 0 : (contentEl.scrollTop / scrollMax) * maxThumbOffset

    setMonitorScrollbar({
      thumbSize,
      thumbOffset,
      scrollTop: contentEl.scrollTop,
      scrollMax,
    })
  }, [])

  const scrollMonitorFromPointer = useCallback(
    (clientY) => {
      const contentEl = monitorScrollRef.current
      const trackEl = monitorScrollbarRef.current

      if (!contentEl || !trackEl) {
        return
      }

      const rect = trackEl.getBoundingClientRect()
      const thumbSizePx = (monitorScrollbar.thumbSize / 100) * rect.height
      const maxThumbTravel = Math.max(rect.height - thumbSizePx, 0)
      const pointerY = Math.min(Math.max(clientY - rect.top, 0), rect.height)
      const thumbTop = Math.min(
        Math.max(pointerY - thumbSizePx / 2, 0),
        maxThumbTravel,
      )
      const ratio = maxThumbTravel === 0 ? 0 : thumbTop / maxThumbTravel

      contentEl.scrollTop = ratio * (contentEl.scrollHeight - contentEl.clientHeight)
      syncMonitorScrollbar()
    },
    [monitorScrollbar.thumbSize, syncMonitorScrollbar],
  )

  useEffect(() => {
    if (scene !== 'control-room-interior') {
      return
    }

    syncMonitorScrollbar()
    window.addEventListener('resize', syncMonitorScrollbar)

    return () => {
      window.removeEventListener('resize', syncMonitorScrollbar)
    }
  }, [scene, syncMonitorScrollbar])

  useEffect(() => {
    if (!isMonitorScrollbarDragging) {
      return
    }

    const handleMouseMove = (event) => {
      scrollMonitorFromPointer(event.clientY)
    }

    const handleMouseUp = () => {
      setIsMonitorScrollbarDragging(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isMonitorScrollbarDragging, scrollMonitorFromPointer])

  const targetBySlot = useMemo(
    () =>
      TARGET_BOOKS.reduce((acc, book) => {
        acc[book.slotId] = book
        return acc
      }, {}),
    [],
  )

  const topSlots = useMemo(
    () => SHELF_SLOTS.filter((slot) => slot.shelf === 'top'),
    [],
  )

  const bottomSlots = useMemo(
    () => SHELF_SLOTS.filter((slot) => slot.shelf === 'bottom'),
    [],
  )

  const activeBook = useMemo(
    () => TARGET_BOOKS.find((book) => book.id === activeBookId) ?? null,
    [activeBookId],
  )

  const activePageData = activeBook ? activeBook.pages[activePage] : null
  const activeBookIcon = activeBook ? BOOK_ICON_BY_ID[activeBook.id] : null
  const totalPages = activeBook ? activeBook.pages.length : 0

  const collectedCount = collectedOrbIds.length
  const totalBooks = TARGET_BOOKS.length
  const isLastPage = activeBook
    ? activePage === activeBook.pages.length - 1
    : false
  const isActiveOrbCollected = activeBook
    ? collectedOrbIds.includes(activeBook.id)
    : false

  const openBook = (bookId) => {
    setActiveBookId(bookId)
    setActivePage(0)
  }

  const closeBook = () => {
    setActiveBookId(null)
    setActivePage(0)
  }

  const goToPage = (pageNum) => {
    setActivePage(pageNum)
    setTimeout(() => {
      const bookPopup = document.querySelector('.book-popup')
      if (bookPopup) {
        bookPopup.scrollTop = 0
      }
    }, 0)
  }

  const collectOrb = () => {
    if (!activeBook) {
      return
    }

    setCollectedOrbIds((prev) =>
      prev.includes(activeBook.id) ? prev : [...prev, activeBook.id],
    )
  }

  const handlePasswordSubmit = () => {
    if (passwordInput === '0000') {
      setPasswordMessage('success')
      setKeyObtained(true)
      setPasswordInput('')
      setTimeout(() => {
        setPasswordPopup(false)
        setPasswordMessage(null)
      }, 2000)
    } else {
      setPasswordMessage('error')
      setPasswordInput('')
      setTimeout(() => {
        setPasswordMessage(null)
      }, 2000)
    }
  }

  const sceneTitle =
    scene === 'library'
      ? '빛나는 책에서 기억 구슬 회수하기'
      : scene === 'exit-door'
        ? '열쇠 구멍이 있는 출구 문'
        : '통제 구역으로 연결되는 문'

  const goToScene = (nextScene) => {
    setScene(nextScene)
    closeBook()
  }

  return (
    <main className="case-file">
      <header className="status-bar">
        <div>
          <p className="eyebrow">Design Diary: Library Wing</p>
          <h1>{sceneTitle}</h1>
        </div>
        <div className="progress-info" aria-live="polite">
          <p className="progress">
            수집한 구슬 <strong>{collectedCount}</strong> / {totalBooks}
          </p>
          {keyObtained && (
            <p className="progress key-status">
              🔑 <strong>KEY OBTAINED</strong>
            </p>
          )}
        </div>
      </header>

      {scene === 'library' && (
        <section className="bookshelf-scene" aria-label="도서관 책장">
          <button
            type="button"
            className="scene-nav-button left"
            onClick={() => goToScene('exit-door')}
            aria-label="Exit 문 화면으로 이동"
          >
            ←
          </button>

          <button
            type="button"
            className="scene-nav-button right"
            onClick={() => goToScene('control-room-door')}
            aria-label="Control Room 문 화면으로 이동"
          >
            →
          </button>

          <div className="book-row top-row">
            {topSlots.map((slot, index) => {
              const targetBook = targetBySlot[slot.id]

              if (!targetBook) {
                return (
                  <div
                    key={slot.id}
                    className={`bookshelf-book ${slot.tone}`}
                    style={{ '--book-height': `${slot.h}px` }}
                    aria-hidden="true"
                  >
                    <span className="book-spine">Volume {index + 1}</span>
                  </div>
                )
              }

              const isCollected = collectedOrbIds.includes(targetBook.id)

              return (
                <motion.button
                  key={slot.id}
                  type="button"
                  className={`bookshelf-book is-target ${slot.tone} ${isCollected ? 'is-collected' : ''}`}
                  style={{ '--book-height': `${slot.h}px` }}
                  onClick={() => openBook(targetBook.id)}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08, duration: 0.35 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`${targetBook.title} 열기`}
                >
                  <span className="book-spine">{targetBook.title}</span>
                </motion.button>
              )
            })}
          </div>

          <div className="book-row bottom-row">
            {bottomSlots.map((slot, index) => {
              const targetBook = targetBySlot[slot.id]

              if (!targetBook) {
                return (
                  <div
                    key={slot.id}
                    className={`bookshelf-book ${slot.tone}`}
                    style={{ '--book-height': `${slot.h}px` }}
                    aria-hidden="true"
                  >
                    <span className="book-spine">Volume {topSlots.length + index + 1}</span>
                  </div>
                )
              }

              const isCollected = collectedOrbIds.includes(targetBook.id)

              return (
                <motion.button
                  key={slot.id}
                  type="button"
                  className={`bookshelf-book is-target ${slot.tone} ${isCollected ? 'is-collected' : ''}`}
                  style={{ '--book-height': `${slot.h}px` }}
                  onClick={() => openBook(targetBook.id)}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08 + 0.15, duration: 0.35 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`${targetBook.title} 열기`}
                >
                  <span className="book-spine">{targetBook.title}</span>
                </motion.button>
              )
            })}
          </div>

        </section>
      )}

      {scene === 'exit-door' && (
        <section className="door-scene" aria-label="Exit 문 화면">
          <p className="door-top-label">Exit</p>
          <button
            type="button"
            className="single-door keyhole-door door-interactive"
            onClick={() => setDoorPopup('exit')}
            aria-label="Exit 문과 상호작용하기"
          >
            <span className="door-handle" />
            <span className="keyhole" />
          </button>
          <button
            type="button"
            className="door-arrow return-right"
            onClick={() => goToScene('library')}
            aria-label="책장 화면으로 돌아가기"
          >
            →
          </button>
        </section>
      )}

      {scene === 'control-room-door' && (
        <section className="door-scene" aria-label="Control Room 문 화면">
          <p className="door-top-label">Control Room</p>
          <motion.button
            type="button"
            className="single-door barred-door door-interactive"
            onClick={() => setDoorPopup('control-room')}
            aria-label="Control Room 문과 상호작용하기"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
            <span className="auth-plate">Authorized Personnel Only</span>
          </motion.button>
          <button
            type="button"
            className="door-arrow return-left"
            onClick={() => goToScene('library')}
            aria-label="책장 화면으로 돌아가기"
          >
            ←
          </button>
        </section>
      )}

      {scene === 'control-room-interior' && (
        <section className="control-room-interior" aria-label="Control Room 내부">
          <h2 className="room-title">Control Room</h2>
          <div className="interior-content">
            <div className="monitor">
              <div className="monitor-screen">
                <div
                  className="monitor-screen-content"
                  id="monitor-scroll-content"
                  ref={monitorScrollRef}
                  onScroll={syncMonitorScrollbar}
                >
                  <p className="monitor-rec-title">FINAL RECOMMENDATION</p>
                  <div className="monitor-recommendation-list">
                    <div className="monitor-recommendation-item">
                      <div className="monitor-app-row">
                        <img src={applePhotosLineIcon} alt="Apple Photos" className="app-icon-glow monitor-app-icon" />
                        <p className="monitor-app-name">Apple Photos - Memories</p>
                        <p className="monitor-rating">★★★☆☆</p>
                      </div>
                      <p className="monitor-review">Apple's unique aesthetics and the convenience of automation are overwhelming, but the classification logic is opaque, and a dumb AI that can't even understand a single negative sentence can be really frustrating.</p>
                    </div>

                    <div className="monitor-recommendation-item">
                      <div className="monitor-app-row">
                        <img src={youtubeMusicLineIcon} alt="YouTube Music" className="app-icon-glow monitor-app-icon" />
                        <p className="monitor-app-name">Youtube Music - Recap</p>
                        <p className="monitor-rating">★★☆☆☆</p>
                      </div>
                      <p className="monitor-review">The design has high uniformity and is simple, but the records are a temporary archive that may disappear at any time. In particular, Korean users have to endure 'language discrimination,' being excluded even from core AI features.</p>
                    </div>

                    <div className="monitor-recommendation-item">
                      <div className="monitor-app-row">
                        <img src={googleMapsLineIcon} alt="Google Maps" className="app-icon-glow monitor-app-icon" />
                        <p className="monitor-app-name">Google Maps - Timeline</p>
                        <p className="monitor-rating">★★★★☆</p>
                      </div>
                      <p className="monitor-review">Although there are costs such as privacy and resource consumption, its value as an intelligent archive that transforms moments that were about to be forgotten into 'Memento' is very high.</p>
                    </div>

                    <div className="monitor-recommendation-item">
                      <div className="monitor-app-row">
                        <img src={instagramLineIcon} alt="Instagram" className="app-icon-glow monitor-app-icon" />
                        <p className="monitor-app-name">Instagram - Archive</p>
                        <p className="monitor-rating">★★★★☆</p>
                      </div>
                      <p className="monitor-review">This is the most emotional and ideal digital autobiography. It is the best choice for those who want to record and cherish their daily lives without much effort, but you have to accept the inconvenience of searching when the records become extensive and it becomes difficult to pinpoint exactly what you want.</p>
                    </div>

                    <div className="monitor-recommendation-item">
                      <div className="monitor-app-row">
                        <img src={nikeLineIcon} alt="Nike Run Club" className="app-icon-glow monitor-app-icon" />
                        <p className="monitor-app-name">Nike Run Club - Activity</p>
                        <p className="monitor-rating">★★★★☆</p>
                      </div>
                      <p className="monitor-review">While the constraints of time exploration and the inconsistency of information exposure need improvement, the visual storytelling of data and user engagement through gamification demonstrate the pinnacle of digital healthcare archives.</p>
                    </div>
                  </div>
                </div>
                <div
                  className="monitor-scrollbar"
                  ref={monitorScrollbarRef}
                  role="scrollbar"
                  aria-controls="monitor-scroll-content"
                  aria-label="Final recommendation scroll"
                  aria-valuemin={0}
                  aria-valuemax={Math.max(monitorScrollbar.scrollMax, 1)}
                  aria-valuenow={Math.round(monitorScrollbar.scrollTop)}
                  onMouseDown={(event) => {
                    event.preventDefault()
                    scrollMonitorFromPointer(event.clientY)
                  }}
                >
                  <div
                    className={`monitor-scrollbar-thumb${isMonitorScrollbarDragging ? ' dragging' : ''}`}
                    style={{
                      height: `${monitorScrollbar.thumbSize}%`,
                      top: `${monitorScrollbar.thumbOffset}%`,
                    }}
                    onMouseDown={(event) => {
                      event.preventDefault()
                      event.stopPropagation()
                      setIsMonitorScrollbarDragging(true)
                    }}
                  />
                </div>
              </div>
              <div className="monitor-bezel" />
            </div>
            <div className="control-panel">
              <div className="panel-light on" />
              <div className="panel-light off" />
              <div className="panel-light on" />
              <div className="panel-button" />
              <div className="panel-button" />
            </div>
            {!keyObtained && (
              <div className="console-section">
                <button
                  type="button"
                  className="console-button"
                  onClick={() => setPasswordPopup(true)}
                  aria-label="비밀번호 입력"
                >
                  ENTER PASSWORD
                </button>
              </div>
            )}
            {keyObtained && (
              <div className="key-badge">
                <span className="key-icon">🔑</span>
                <p>KEY OBTAINED</p>
              </div>
            )}
            <div className="desk">
              <button
                type="button"
                className="control-room-book"
                onClick={() => setActiveBookId('control-book')}
                aria-label="콘솔 책 읽기"
              >
                <span className="book-title-small">System Log</span>
              </button>
            </div>
          </div>
          <button
            type="button"
            className="door-arrow bottom-arrow"
            onClick={() => goToScene('control-room-door')}
            aria-label="Control Room 문으로 돌아가기"
          >
            ↓
          </button>
        </section>
      )}

      <AnimatePresence>
        {doorPopup && (
          <motion.section
            className="door-popup-overlay"
            key={doorPopup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setDoorPopup(null)}
          >
            <motion.article
              className="door-popup-content"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 28, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.32 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="popup-body">
                <h3>{doorPopup === 'exit' ? 'Exit Door' : 'Control Room'}</h3>
                <p className="door-popup-message">
                  {doorPopup === 'exit'
                    ? keyObtained
                      ? '🔑 Congratulation! You escaped!'
                      : "You'll need a key to get out of here."
                    : 'This door has 5 key holes. You need all 5 orbs to unlock it.'}
                </p>
                <p className="door-orb-counter">
                  {doorPopup === 'control-room' && (
                    <>
                      Orbs Collected: <span className="counter-value">{collectedCount} / 5</span>
                    </>
                  )}
                </p>
              </div>
              <div className="popup-actions">
                {doorPopup === 'exit' && keyObtained && (
                  <motion.button
                    type="button"
                    className="enter-button"
                    onClick={() => {
                      setDoorPopup(null)
                      onRestart()
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Escape
                  </motion.button>
                )}
                {doorPopup === 'control-room' && collectedCount === 5 && (
                  <motion.button
                    type="button"
                    className="enter-button"
                    onClick={() => {
                      setDoorPopup(null)
                      goToScene('control-room-interior')
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Enter Control Room
                  </motion.button>
                )}
                <button
                  type="button"
                  className="close-button"
                  onClick={() => setDoorPopup(null)}
                >
                  Close
                </button>
              </div>
            </motion.article>
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {passwordPopup && (
          <motion.section
            className="password-popup-overlay"
            key="password"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setPasswordPopup(false)}
          >
            <motion.article
              className="password-popup-content"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 28, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.32 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="popup-body">
                <h3>ENTER PASSWORD</h3>
                {passwordMessage && (
                  <motion.p
                    className={`password-feedback ${passwordMessage}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {passwordMessage === 'success'
                      ? '✓ Correct! You obtained the key.'
                      : '✗ Incorrect password.'}
                  </motion.p>
                )}
                <div className="password-input-group">
                  <input
                    type="password"
                    className="password-input"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                    placeholder="Enter 4 digits"
                    maxLength="4"
                    disabled={!!passwordMessage}
                    aria-label="비밀번호"
                  />
                </div>
              </div>
              <div className="popup-actions password-actions">
                <button
                  type="button"
                  className="submit-button"
                  onClick={handlePasswordSubmit}
                  disabled={passwordInput.length !== 4 || !!passwordMessage}
                >
                  SUBMIT
                </button>
                <button
                  type="button"
                  className="close-button"
                  onClick={() => setPasswordPopup(false)}
                >
                  CANCEL
                </button>
              </div>
            </motion.article>
          </motion.section>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeBook && (
          <motion.section
            className="memory-overlay"
            key={activeBook.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.target === e.currentTarget && closeBook()}
          >
            <motion.article
              className="book-popup"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 28, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.32 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="book-app-header">
                {activeBookIcon && (
                  <img
                    className="book-app-icon"
                    src={activeBookIcon}
                    alt={`${activeBook.title} icon`}
                  />
                )}
                <h2 className="book-app-name">{activeBook.title}</h2>
              </div>
              <p className="page-indicator">Page {activePage + 1} / {totalPages}</p>

              <section className="book-page-body">
                {typeof activePageData === 'string' ? (
                  <p>{activePageData}</p>
                ) : (
                  <div className={`page-entry-layout ${activePageData?.imageSrc || activePageData?.images ? 'has-image' : ''} ${activePageData?.images ? 'has-multiple-images' : ''} ${activePageData?.title === 'Interaction & Aesthetic Trade-offs' ? 'is-aesthetic-tradeoff' : ''} ${activePageData?.title === 'Interaction Psychology & Information Flow' ? 'is-interaction-psychology' : ''} ${(activePageData?.title === 'Micro-Level Precision: Day View' || activePageData?.title === 'Macro-Level Narrative: Insights' || activePageData?.title === 'Navigation and Filtering Constraints' || activePageData?.title === 'Spatiotemporal Triggers & User Agency') ? 'is-micro-day-view' : ''} ${activePageData?.title === 'Hierarchical Modality & Mental Models' ? 'is-nrc-hierarchy' : ''} ${activePageData?.title === 'Gamification Loop & System Inconsistency' ? 'is-nrc-gamification' : ''}`}>
                    <div className="page-entry-text-block">
                      <h3 className="page-entry-title">{activePageData?.title}</h3>
                      {Array.isArray(activePageData?.content) ? (
                        <div className="page-entry-content">
                          {activePageData.content.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="page-entry-content">{activePageData?.content}</p>
                      )}
                    </div>

                    {(activePageData?.imageSrc || activePageData?.images) && (
                      <figure className="page-entry-image-wrap">
                        {activePageData?.imageSrc && (
                          <img
                            className="page-entry-image"
                            src={activePageData.imageSrc}
                            alt={activePageData.imageAlt ?? activePageData.title}
                          />
                        )}
                        {activePageData?.images && (
                          <div className="page-entry-images-grid">
                            {activePageData.images.map((image, idx) => [
                              <figure key={`image-${idx}`} className="page-entry-image-card">
                                <img
                                  className="page-entry-image"
                                  src={image.src}
                                  alt={image.alt}
                                />
                                {image.caption && (
                                  <figcaption className="page-entry-subcaption">
                                    {image.caption}
                                  </figcaption>
                                )}
                              </figure>,
                              image.rowCaption ? (
                                <figcaption key={`row-caption-${idx}`} className="page-entry-row-caption">
                                  {image.rowCaption}
                                </figcaption>
                              ) : null,
                            ])}
                          </div>
                        )}
                        {activePageData?.imageCaption && (
                          <figcaption className="page-entry-caption">
                            {activePageData.imageCaption}
                          </figcaption>
                        )}
                      </figure>
                    )}
                  </div>
                )}

                {isLastPage && (
                    <div className="orb-collect-zone">
                      <p className="orb-instruction">
                        <span className="orb-arrow">v</span> 아래 구슬을 눌러 수집하세요
                      </p>
                      <button
                        type="button"
                        className={`collectible-orb ${isActiveOrbCollected ? 'is-collected' : ''}`}
                        onClick={collectOrb}
                        aria-label="빛나는 구슬 수집"
                      >
                        <span className="orb-inner" />
                      </button>
                      <p className="orb-state">
                        {isActiveOrbCollected
                          ? '수집 완료: 기록이 안전하게 보관되었습니다.'
                          : '아직 수집되지 않았습니다.'}
                      </p>
                    </div>
                )}
              </section>
            </motion.article>
          </motion.section>
        )}
      </AnimatePresence>

      {activeBook && (
        <>
          <div className="page-controls">
            <button
              type="button"
              className="nav-arrow"
              onClick={() => goToPage(Math.max(activePage - 1, 0))}
              disabled={activePage === 0}
            >
              ←
            </button>
            <button
              type="button"
              className="nav-arrow"
              onClick={() => goToPage(Math.min(activePage + 1, totalPages - 1))}
              disabled={activePage === totalPages - 1}
            >
              →
            </button>
          </div>

          <button
            type="button"
            className="close-button"
            onClick={closeBook}
            aria-label="책장으로 돌아가기"
          >
            ✕
          </button>
        </>
      )}

      <AnimatePresence mode="wait">
        {activeBookId === 'control-book' && (
          <motion.section
            className="memory-overlay"
            key="control-book"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setActiveBookId(null)}
          >
            <motion.article
              className="book-popup"
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 28, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.32 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="spread-tag">System Log</div>
              <h2>Access Log</h2>
              <section className="book-page-body">
                <p className="access-log">Password: 0000</p>
              </section>
            </motion.article>

            <button
              type="button"
              className="close-button"
              onClick={() => setActiveBookId(null)}
              aria-label="로그 닫기"
            >
              ✕
            </button>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  )
}

export default MainPage
