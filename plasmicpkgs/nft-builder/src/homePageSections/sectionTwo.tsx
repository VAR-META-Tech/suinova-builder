import React from "react";
import { Registerable, registerComponentHelper } from "../reg-util";
import { Col, Row } from "antd";
import clsx from "clsx";

// CSS class names
const CSSClasses = {
  sectionContainer: "browse-categories-section-container",
  contentWrapper: "browse-categories-content-wrapper",
  sectionTitle: "browse-categories-title",
  cardColumn: "browse-categories-card-column",
  categoryCard: "browse-categories-card",
  cardBackground: "browse-categories-card-background",
  cardContent: "browse-categories-card-content",
  iconWrapper: "browse-categories-icon-wrapper",
  icon: "browse-categories-icon",
  nameWrapper: "browse-categories-name-wrapper",
  categoryName: "browse-categories-name",
};

// Minify CSS helper function
const minifyCss = (css: string) => {
  return css
    .replace(/\s+/g, " ")
    .replace(/\s*{\s*/g, "{")
    .replace(/\s*}\s*/g, "}")
    .replace(/\s*;\s*/g, ";")
    .replace(/\s*:\s*/g, ":")
    .trim();
};

const categories = [
  {
    id: 1,
    name: "Art",
    icon: "icon",
    image:
      "https://s3-alpha-sig.figma.com/img/dd7a/e108/bb67c30f75e33372d8da9bdccb9f5998?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CfnAbTtqvOHQADhaUCmRER4f-9~sxW5N6or5n78uksGmyRxBXMMiEmIvcs~WnKJZIXc8xfC98uqA6XakkDIUOOx8dO9GPyZ3Dd7oh1-1JkJMZrrDfMVekddcYEL4Iy0El0NE5oQER2d9RajsW~iBdZFIUFdGSN8Voylj8z4Q-vXVd9k8KMNN1BXhN9nZMVpfrs5tnqTNl0eTE7sxMe0MJbeHugGtgdwzr3KcPThuiRglHV1PjqE~GonBb5r7J-JobznpXImNTJF0QoMIX21ByQwNoNHf0SDUL-nZyON334Smc9Fi-uNlFtURgeRqZnMO7egLN9moovCQhvNoo88Gtg__",
    bgColor: "linear-gradient(135deg, #3a7bd5, #00d2ff)",
  },
  {
    id: 2,
    name: "Collectibles",
    icon: "icon",
    image:
      "https://s3-alpha-sig.figma.com/img/a447/a555/55367f454b2137f56fb0b1ed79daaa4a?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qLa6stMx4tCFLg4286yndw-eVMXZzm6-WISwsmI7DYXVSD6ne6PLDgM8Nk3otComAkP6TFQzsyqNjZqZWdynoO1Ff2p2ZBlu3wVNaFRUKCmoW2H~IpTZDNhq4lLp~0Nv~OOCSlEedkRkdRdY0hA-CD21zAmeCozL09ACMMHCPSL7VqPx6D71adgJdHZAn-uUnUmvhDfOofXMZNUu3jGmeFzy1pW4oeWJqJfZfBYnro~xK5I0gj047--Rgi9oghSYpMfFwpsWMckRUajvpNIxlzTQBiP~FJ8PJDWIejl6N9RAbNJLm22Gefb8Jk4i2fb0bs3ogv3CsuFNdHG3GNYWoA__",
    bgColor: "linear-gradient(135deg, #ff9966, #ff5e62)",
  },
  {
    id: 3,
    name: "Music",
    icon: "icon",
    image:
      "https://s3-alpha-sig.figma.com/img/712c/21d1/f2c43e2071c63956d841b4314322e5e3?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AYHTByNXEiFyVSQdIIyKjIvoQUNwdo8vaO7LrYz7CuQy-Ss8D1yI5hb3zen6UleudSWbYFDXh50P5qk7FhgfSUkx1yjp9P0G778qQGjaZCaEgp305Xtfhn6vuKBVNe3iXqAJJKHhut5BC~e8v9ZJBYmueyDKHkob6Fe7SfsVUAU-ue4HroALEra7uef69bkYL9Ep2pjQt1Eatos8ZA50Jiy17DdF1WWUipbuFV-matVS72h-LBE~6-H1LotYyOvbhtQo5eqiUZ-uka3QzT2pFTTal4Nf8kSVwOOTGsapDQ5xYAR82EJYrD1yUEtIMqIc55rhBNDoZA36BgN~IK8Ztg__",
    bgColor: "linear-gradient(135deg, #1e3c72, #2a5298)",
  },
  {
    id: 4,
    name: "Photography",
    icon: "icon",
    image:
      "https://s3-alpha-sig.figma.com/img/4c38/3bf0/a66e9d9ff2548bff20d7717ba0dee37f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZNzbBnK3CIT-namV5QeGBAepTCjRfv2SsUKF7bPsXCBB~jAM0PTnhPsNu3UYVAOUKMZD-oLE0RAeFhJdZSYLln9wv2A2EEV3vkzSRs0Ng0nUGEuzVzKAvOjuJntY9eD5Ls~E-08ZmnCZSioEVWpw7~XZEDEFxxXemRWm14b1Q1pmxuMmwHWoe-8i7-MdtuiqbDlquYebi9wE5R~Lhzpeco0sowWEtL0zIPfkxP9mhY8urv1Dq0Qw7tRBDy2mLBtCQQ45qPCsr0ufp9ATER9pPplAF~p6eVzo4xzXGOfp2ZwzGHIRQsuCYhCA9tiGndIVIxFbFzdWuXl3rc-0FQCXNw__",
    bgColor: "linear-gradient(135deg, #4b6cb7, #182848)",
  },
  {
    id: 5,
    name: "Video",
    icon: "icon",
    image:
      "https://s3-alpha-sig.figma.com/img/bced/3a47/619826aac9ead2ea11e9a4d708ee2eb3?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DHca9ylkUkvuWn9oobr-SCC6BHY7Cpw5efNjXYnnmwAPROhM46BNCGRtKKaDzUmbfqumAMG64s8lCwkHa~lRZhjYlSGsGHWBY722fX52IC5jmToFEUAngiErOqoJEWl8VQJP63FB852eYWKaVv1fHjAvmwjUiPn~0Qc~-1KCNYupADdPgG-vC2WR7VFkEu5BzA9szq93wXFmDRgyBbda7Md1kQ4R0THx89BaDmU6Gp3KvtW3JjxOF298yZ~YzHZzvfRzgOmqLZc-dIYvenT-qLTkG~B2Vc5~LaC4OCr-jyiXTVNa2QUGGebGGq9PA-Je1uRdRmzGOMP8TuFQiTv95g__",
    bgColor: "linear-gradient(135deg, #8e9eab, #eef2f3)",
  },
  {
    id: 6,
    name: "Utility",
    icon: "icon",
    image:
      "https://s3-alpha-sig.figma.com/img/6577/7e64/f758769fe3ff68dd4e432a23ac729cf3?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Oqol-TRGsV7C329vquZVw2o7kN43QY2WV0elDJaf~ra-iHM4wnY3fIMgjYH02Sq6rH9IG2FlWzPeTe4eJWGBffCYI-jtVAPzaXq5asrV20nd7YzHQNsHw-UUmV3BuMUG6LeDGUusC7u73sknh~VPZeD0VHjgfTTK6FVyWHLbuqCAZujg8LV-0TRuUyxfdLvcyO2g62MeW0JSWQ9NWRj23~1xEytCv1y1OOM2yiDsvMKDjkW0d9kOCDvxT1KV8v0LAQkpS9k6FpVw3RVRZAD89ohiKEHNG62YcdJl1Wj8h02sQG9GuzIJrPLW~cILADDEewXmWWWD-L7jLfkxdQxRWA__",
    bgColor: "linear-gradient(135deg, #f3904f, #3b4371)",
  },
  {
    id: 7,
    name: "Sport",
    icon: "icon",
    image:
      "https://s3-alpha-sig.figma.com/img/0ca9/9000/f9441958c03b7b140ab7551391000da7?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=F-EfJMJNRNt4Cy61uqzWWN9jEbU~JfTg05PP9zpWU~wvG2EMO2pnEZzT30rATDufMydpLz1GfZV0sLTZR6K77L5M2YK93OoLHkzIDr786Ziq3~YH70a9UBxxTxW01-PlieRT6b7X-UV82cql4sU6DOATA9DVaX~K7FD8L10tgrMd3Mm1DkrA~BKh1RX~EDrA6uwg9xchV~PH5-olkVgKX0t-UhWQ3OfiH7-FxcaPszLLyp-SUdDAO65D1wnEg5pKQXT8V3S6Zsoh2-sCf25vWi1S6vzcrLZ7VdJ-xx7TYYHbYyvwXNq616dUv-10ERK-Op8yU0zUiywS75n1vPKn~A__",
    bgColor: "linear-gradient(135deg, #56ab2f, #a8e063)",
  },
  {
    id: 8,
    name: "Virtual Worlds",
    icon: "icon",
    image:
      "https://s3-alpha-sig.figma.com/img/bf89/9e79/c22aded4cc73a4fccfd9b3969295e9b9?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WIJZCw-JaCvHvjvX0WNWIv~-rRyjRy8sfWiicZgxLBE2H7RFLBv2vi9QUuRHExOrztrKJW2ACRmHA9sdq2p9G~d~yWLjQslAINGSTL52MpY~3j3gDf2mfdXTY4x2OrtK43-3LrtW~8diKsUol4-jDQlMaUCUFyyyr0pAFmFPW9IYVQmaHxivTRqReZrCsah1~vKFDVyb83VBl5acKDbgP3YLWR3bVFE43HHXGrYlSu9EGoWg-ajYWj6i-Gjk3slrEzyW1yfKPO1mPZtzVanfZLD-6O5kJPawc36fCMhmu3hCv6SYR~-TpdA2hPFHoWKxINNkj8as-LFuoYpv5dROyQ__",
    bgColor: "linear-gradient(135deg, #614385, #516395)",
  },
];

interface ISectionTwo {
  className?: string;
  sectionTitle?: string;
}

const SectionTwo = ({ className, sectionTitle }: ISectionTwo) => {
  const cssStyles = React.useMemo(
    () =>
      minifyCss(`
      .${CSSClasses.sectionContainer} {
        font-family: Poppins;
        background-color: #0a0e17;
        padding: 40px 20px;
        width: 100%;
      }
  
      .${CSSClasses.contentWrapper} {
        max-width: 1050px;
        margin: 0 auto;
      }
  
      .${CSSClasses.sectionTitle} {
        color: white;
        margin-bottom: 30px;
        font-size: 28px;
        font-weight: bold;
      }
  
      .${CSSClasses.cardColumn} {
        /* Ant Design's Row/Col system handles the gutter and responsive sizes */
      }

      .${CSSClasses.categoryCard} {
        width: 240px;
        height: 270px;
        aspect-ratio: 1/1;
        border-radius: 12px;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .${CSSClasses.cardBackground} {
        position: absolute;
        top: 0;
        left: 0;
        width: 240px;
        height: 240px;
        filter: blur(10px);
        opacity: 0.9;
        z-index: 1;
      }

      .${CSSClasses.iconWrapper} {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
      }

      .${CSSClasses.icon} {
        font-size: 36px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .${CSSClasses.nameWrapper} {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #1A2938;
        padding: 0px;
        z-index: 2;
      }

      .${CSSClasses.categoryName} {
        color: white;
        font-size: 20px;
        padding: 16px;
        font-weight: 600;
        line-height: 140%;
        display: block;
        text-align: start;
      }
    `),
    []
  );
  return (
    <div className={clsx(className, CSSClasses.sectionContainer)}>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <div className={CSSClasses.contentWrapper}>
        <div className={CSSClasses.sectionTitle}>{sectionTitle}</div>

        <Row gutter={[16, 16]}>
          {categories.map((category) => (
            <Col
              xs={12}
              sm={12}
              md={6}
              key={category.id}
              className={CSSClasses.cardColumn}
            >
              <div className={CSSClasses.categoryCard}>
                <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
                {/* Background with blur effect */}
                <img
                  className={CSSClasses.cardBackground}
                  src={category.image} // Dynamic background color
                  alt={`${category.name} background`}
                />

                {/* Icon */}
                <div className={CSSClasses.iconWrapper}>
                  <div className={CSSClasses.icon}>{category.icon}</div>
                </div>

                {/* Category Name */}
                <div className={CSSClasses.nameWrapper}>
                  <div className={CSSClasses.categoryName}>
                    {category.name}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default SectionTwo;

export function registerSectionTwo(loader?: Registerable) {
  registerComponentHelper(loader, SectionTwo, {
    name: "hostless-section-two",
    displayName: "SectionTwo",
    props: {
      sectionTitle: {
        type: "slot",
        defaultValue: [
          {
            type: "text",
            value: "Browse Categories",
          },
        ],
      },
    },
    importPath: "@plasmicpkgs/nft-builder",
    importName: "SectionTwo",
  });
}
