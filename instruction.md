There will be left panel ( non-scroallable ) and right panel ( scrollable ) in the instruction page. 
The left panel will have a deep black background with my profile picture and name and a signature( transparent image ) overlaid on bottom line of the porfile picture. Below it there rill link widgts for my socoal media accounts ( LinkedIn, GitHub, Twitter, etc. ) and a download button for my CV. Below the signature there will be some widgets for different section ( Introduction , Research and Publications, Education, Career, Contests and Hackathons and Miscellaneous ). 

The right panel will have a white background and will be scrollable. It will have the content of the section selected in the left panel. Each section will have a heading and some text content. The text content will be in black color and will be easy to read. The right panel will also have some images and links related to the section content.


Introduction: 
 - A brief introduction about myself, my background, and my interests.
 - A timeline of my academic and professional journey, highlighting key milestones and achievements.
    

Research and Publications:
    - Brief overview of my research interests and areas of expertise.
    - Publications and Preprints: 
        - List of Cards
            => Paper Title
            => Publication Venue
            => Year of Publication
            => Breif Description of the Paper
            => Link to the Paper
            => Horizontally scrollable list of images ( when clicked on the card, it will expand to show the images in a larger view )
    - Current Reserach Interests:
        - List of Cards
            => Research Area
            => Breif Description of the Research Area
            => Link to the Research Area
            => Horizontally scrollable list of images ( when clicked on the card, it will expand to show the images in a larger view )

Education:
    - Universty Name, Degree, Major, Graduation Year
        < Details about the degree, major, and graduation year and other activites and achievements during the time at the university >
    - School Name, Degree, Major, Graduation Year
        < Details about the degree, major, and graduation year and other activites and achievements during the time at the school >

Career:
    ( same format as education section but with more details about the job roles, responsibilities, and achievements during the time at the company )

Contests and Hackathons:
    - List of Cards
        => Contest/Hackathon Name
        => Organizing Body
        => Year of Participation
        => Breif Description of the Contest/Hackathon
        => Link to the Contest/Hackathon
        => Horizontally scrollable list of images ( when clicked on the card, it will expand to show the images in a larger view )

Miscellaneous:
    - A plain text section where I can write about anything that doesn't fit into the other sections, such as hobbies, interests, or personal projects.


The image assets should be properly stored in a organized directory structure, and the links should be functional and lead to the correct destinations. The overall design should be clean, modern, and visually appealing, with a consistent color scheme and typography throughout the page.


---

## UI Wireframes (ASCII)

### Overall Page Layout

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                              BROWSER VIEWPORT                                    │
├─────────────────────────┬────────────────────────────────────────────────────────┤
│   LEFT PANEL (fixed)    │          RIGHT PANEL (scrollable)                      │
│   ~300px, no scroll     │          remaining width, overflow-y: auto             │
│   bg: deep black        │          bg: white                                     │
│                         │                                                        │
│  ┌───────────────────┐  │   ┌────────────────────────────────────────────────┐   │
│  │                   │  │   │                                                │   │
│  │  Profile Picture  │  │   │   Section content renders here based on the    │   │
│  │   (circular/sq)   │  │   │   active nav item selected in the left panel   │   │
│  │                   │  │   │                                                │   │
│  │  ~~signature~~    │  │   │                                                │   │
│  │  (overlaid on     │  │   │                                                │   │
│  │   bottom edge)    │  │   │                                                │   │
│  └───────────────────┘  │   │                                                │   │
│                         │   │                                                │   │
│  Name / Title           │   │                                                │   │
│                         │   │                                                │   │
│  ┌─┐ ┌─┐ ┌─┐ ┌─┐      │   │                                                │   │
│  │in│ │GH│ │Tw│ │..│   │   │                                                │   │
│  └─┘ └─┘ └─┘ └─┘      │   │                                                │   │
│  [ ⬇ Download CV ]     │   │                                                │   │
│                         │   │                                                │   │
│  ── Navigation ───────  │   │                                                │   │
│  > Introduction         │   │                                                │   │
│    Research & Pubs      │   │                                                │   │
│    Education            │   │                                                │   │
│    Career               │   │                                                │   │
│    Contests & Hacks     │   │                                                │   │
│    Miscellaneous        │   │                                                │   │
│                         │   └────────────────────────────────────────────────┘   │
│                         │                                                        │
└─────────────────────────┴────────────────────────────────────────────────────────┘
```

### Left Panel Detail

```
┌─────────────────────────┐
│      LEFT PANEL         │
│   (deep black bg)       │
│                         │
│  ┌───────────────────┐  │
│  │                   │  │
│  │   ┌───────────┐   │  │
│  │   │  Profile  │   │  │
│  │   │  Picture  │   │  │
│  │   │           │   │  │
│  │   └───────────┘   │  │
│  │  ~~~signature~~~  │  │  ← transparent PNG overlaid
│  └───────────────────┘  │    on bottom of profile pic
│                         │
│    Debasmit Roy         │  ← name in white text
│    (subtitle/tagline)   │
│                         │
│  ┌──┐ ┌──┐ ┌──┐ ┌──┐   │
│  │Li│ │GH│ │Tw│ │  │   │  ← social media icon links
│  └──┘ └──┘ └──┘ └──┘   │
│                         │
│  ┌───────────────────┐  │
│  │  ⬇  Download CV   │  │  ← download button
│  └───────────────────┘  │
│                         │
│  ─────────────────────  │
│                         │
│  ┌───────────────────┐  │
│  │ ● Introduction    │  │  ← active state (highlighted)
│  ├───────────────────┤  │
│  │   Research & Pubs │  │
│  ├───────────────────┤  │
│  │   Education       │  │
│  ├───────────────────┤  │
│  │   Career          │  │
│  ├───────────────────┤  │
│  │   Contests &      │  │
│  │   Hackathons      │  │
│  ├───────────────────┤  │
│  │   Miscellaneous   │  │
│  └───────────────────┘  │
│                         │
└─────────────────────────┘
```

### Right Panel — Introduction Section

```
┌────────────────────────────────────────────────────────────────┐
│  INTRODUCTION                                      (scrollable)│
│  ══════════════                                                │
│                                                                │
│  Hello! I'm Debasmit Roy, a ... (brief intro paragraph)       │
│  ...background, interests, etc.                                │
│                                                                │
│  ── Academic & Professional Timeline ──────────────────────    │
│                                                                │
│      ●─────────●─────────●─────────●─────────●                │
│      │         │         │         │         │                │
│    2016      2018      2020      2022      2024               │
│   School    Univ.    Intern    Job/Res.   Current             │
│   milestone milestone milestone milestone  milestone          │
│                                                                │
│  (Each node expands to show details on hover/click)            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Right Panel — Research and Publications Section

```
┌────────────────────────────────────────────────────────────────┐
│  RESEARCH AND PUBLICATIONS                                     │
│  ═════════════════════════                                     │
│                                                                │
│  Overview paragraph about research interests...                │
│                                                                │
│  ── Publications & Preprints ──────────────────────────────    │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ Paper Title                                  [2024]    │    │
│  │ Venue: Conference/Journal Name                         │    │
│  │                                                        │    │
│  │ Brief description of the paper and its contributions   │    │
│  │ ...                                                    │    │
│  │                                                        │    │
│  │ 🔗 Link to Paper                                      │    │
│  │                                                        │    │
│  │ Images: ◀ [img1] [img2] [img3] [img4] ... ▶           │    │
│  │         ← horizontally scrollable →                    │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ Paper Title                                  [2023]    │    │
│  │ Venue: ...                                             │    │
│  │ ...                                                    │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                │
│  ── Current Research Interests ────────────────────────────    │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ Research Area Name                                     │    │
│  │                                                        │    │
│  │ Brief description of research direction...             │    │
│  │                                                        │    │
│  │ 🔗 Link                                               │    │
│  │                                                        │    │
│  │ Images: ◀ [img1] [img2] [img3] ▶                      │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Right Panel — Education Section

```
┌────────────────────────────────────────────────────────────────┐
│  EDUCATION                                                     │
│  ═════════                                                     │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 🎓 University Name                                    │    │
│  │    Degree: B.S./M.S./Ph.D. in Major          2020–24  │    │
│  │                                                        │    │
│  │    • Details about degree, thesis, coursework          │    │
│  │    • Activities & clubs                                │    │
│  │    • Awards & achievements                             │    │
│  │    • Notable projects                                  │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 🏫 School Name                                        │    │
│  │    Degree: High School Diploma              2016–20    │    │
│  │                                                        │    │
│  │    • Details about activities                          │    │
│  │    • Achievements                                      │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Right Panel — Career Section

```
┌────────────────────────────────────────────────────────────────┐
│  CAREER                                                        │
│  ══════                                                        │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 💼 Company Name                                       │    │
│  │    Role: Job Title                           2023–Now  │    │
│  │                                                        │    │
│  │    • Job responsibilities                              │    │
│  │    • Key projects & contributions                      │    │
│  │    • Technologies used                                 │    │
│  │    • Achievements & impact                             │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 💼 Previous Company                                   │    │
│  │    Role: Intern / Engineer                   2022–23   │    │
│  │    ...                                                 │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Right Panel — Contests and Hackathons Section

```
┌────────────────────────────────────────────────────────────────┐
│  CONTESTS AND HACKATHONS                                       │
│  ═══════════════════════                                       │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ Contest / Hackathon Name                     [2024]    │    │
│  │ Organized by: Organization Name                        │    │
│  │                                                        │    │
│  │ Brief description of the event, role, outcome...       │    │
│  │                                                        │    │
│  │ 🔗 Link to event                                      │    │
│  │                                                        │    │
│  │ Images: ◀ [img1] [img2] [img3] ▶                      │    │
│  │         ← horizontally scrollable →                    │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ Another Hackathon                            [2023]    │    │
│  │ ...                                                    │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Right Panel — Miscellaneous Section

```
┌────────────────────────────────────────────────────────────────┐
│  MISCELLANEOUS                                                 │
│  ═════════════                                                 │
│                                                                │
│  Free-form text area for hobbies, interests, personal          │
│  projects, or anything else that doesn't fit the other         │
│  sections.                                                     │
│                                                                │
│  Lorem ipsum dolor sit amet, consectetur adipiscing elit.      │
│  Sed do eiusmod tempor incididunt ut labore et dolore magna    │
│  aliqua...                                                     │
│                                                                │
│  (Plain text — no cards, just readable paragraphs)             │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Image Lightbox (Expanded Card Image View)

```
┌────────────────────────────────────────────────────────────────┐
│                        LIGHTBOX OVERLAY                        │
│                     (dimmed background)                         │
│                                                                │
│              ┌──────────────────────────────┐                  │
│              │                              │                  │
│              │                              │                  │
│              │      Enlarged Image          │                  │
│              │                              │                  │
│              │                              │                  │
│              │                              │                  │
│              └──────────────────────────────┘                  │
│                                                                │
│          ◀  ○  ○  ●  ○  ○  ▶    (dot indicators)             │
│                                                                │
│                        [ ✕ Close ]                             │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```