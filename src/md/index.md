# bastianluk

## Looking for a new opportunity

I am mainly interested in platform engineering or developer experience related roles - I have experience with my colleagues being my "customers" and I think in today's day and age there is still a lot of value in making other developers more productive.

However, I am open to the idea of joining as a product developer / builder to help deliver direct value to end customers, even if the customers are internal, like building entire tools / products for other departments within the same company.
I got a small wind of proper product work in my last project with my last employer (Mews) where I was in direct contact with the customers, making sure the communication around my new feature (accessible PDF printing) was clear and its beta program was a success.

If you feel like I have something to offer your company and teams, feel free to reach out over @ **[LinkedIn](https://www.linkedin.com/in/bastianluk/)**

## About Me

My full name is Lukáš Bastián, I am 28, my last title was Senior .NET Platform Engineer, formerly @ [Mews](https://github.com/MewsSystems).

In the past, I paused and subsequently ended my studies of Software and data engineering at the Faculty of Mathematics and Physics @ Charles University in Prague (2017-2021).

My free time is mostly taken up by quality time with my wife, excercising and enjoying a well deserved sauna afterwards, or playing some kind of a game, usually Magic the Gathering or other board games but I am no stranger to PC games either.

## Experience

> **INFO** This page is a work in progress as I am adding more details about what I had done in the past.

Most of what follows comes from working @ Mews as my first and only (relevant) employer in software engineering.

I used to work primarily as a platform engineer, focused on internal tools and libraries that other developers could (re)use and so called developer experience - platform engineers give product engineers what they need to focus on developing the product instead of worrying about how to wire up Redis for example.

Bigger initiatives that I could extend on during a potential interview include:

- helped build and (production) test an internal cloud platform
  - this included migrating one domain (the scheduling for custom asynchronous background-processing; imagine Temporal or Quartz) outside the monolithic application to its own service
- several migrations between .NET versions
  - starting with .NET Framework >>> .NET Core, then upgrades of .NET Core
- helped introduce Test Impact Analysis (TIA)
  - to shorten the time spent waiting for pipelines to finish running tests that are not be relevant to a change an engineer makes
- accessible PDF printing service
  - designing and implementing a new service to enable other (micro)services printing accessible PDFs

Especially later during my last tenure we were responsible for the on-call support for our services and tools.
During the day, the support was mostly helping other engineers with their issues and queries.
During the night, if the call came, we were responsible for jumping in and remediating any issues with our services or tools. The incident process also included the post-incident learning flow, usually with a post-mortem, to help us get better and make sure we do not repeat the same mistakes the next time around.

### Technologies and Tools

<details>
<summary>.NET / C#</summary>

Ever since my studies I have mostly worked within the dotnet family. I rarely dabbled into F# as functional programming had been an interest of mine (that has unfortunately gone unattended for some time).

I was a part of a couple successful .NET migrations: from .NET Framework 4.7 to .NET Core and then subsequent .NET Core upgrades, usually LTS to LTS versions. It was not just about the required support changes but also about unlocking the new features for the developers with each update.
The latest one included going from Windows to Linux runtimes which brought its own set of issues that had to be solved but it also helped unlock hosting the application on Linux app services, saving money for the company.

Other in code migrations I was a part of included moving from a custom dependency injection framework to the built-in ASP.NET Core DI, including the support for running them side by side.

</details>

<details>
<summary>Azure DevOps</summary>

We were in large part responsible for CI/CD for almost all teams in the company, especially for the main monolithic application at Mews.

With more and more tests in the pipelines, especially the Continuous Integration was taking a massive hit due to long wait times. We decided to introduce Test Impact Analysis as one of the solutions. Instead of running all the tests every time, we added a mechanism that detects only the relevant tests that should be run and executes them, cutting the wait times.

</details>

#### Others include

- Coralogix
  - SLO, alerting and dashboard setups for the services we owned
- Octopus Deploy
- Redis
  - throttling and caching
- Cosmos
  - to be completely honest, an expensive mistake that was used to store event data
- Service Bus
  - used for example for the async background-processing and its messaging (scheduler broadcasting a message to the processors)
- Temporal
  - in my case, used for fairly simple background workflows like periodical cleaning of old data
