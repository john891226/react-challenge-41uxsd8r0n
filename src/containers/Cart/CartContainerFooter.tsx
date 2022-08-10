import {
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Grid } from "@mui/material";
import React, { useContext } from "react";
import { useMemo } from "react";
import { IntlContext as ICtx } from "react-intl";

import ExternalLink from "../../components/ExternalLink";
import Link from "../../components/Link";
import LinksSection from "../../components/LinksSection";
import Logo from "../../components/Logo";
import MenuSelect from "../../components/MenuSelect";
import { IntlContext, Langs, LangsList } from "../../stores/intl/IntlContext";

function CartContainerFooter() {
  const intl = useContext(ICtx);
  const intlCtx = useContext(IntlContext);

  const lang: Langs = (intl.locale.split("-").shift() as Langs) ?? "en";

  const langsList = useMemo(
    () =>
      LangsList.map((l) => {
        return <div key={l.id}>{l.labels[lang]}</div>;
      }),
    [intl.locale]
  );

  const currentLang = langsList.find((c) => c.key == lang);

  return (
    <Grid
      bgcolor="dark.10"
      container
      direction="column"
      sx={{
        height: "100%",
        minHeight: "50vh",
        paddingY: {
          xs: "20px",
          sm: "80px",
        },
        paddingX: {
          xs: "24px",
          sm: "92px",
        },
      }}
    >
      <Grid
        container
        color="dark.05"
        item
        sx={{ fontSize: "15px", gap: "10px" }}
        justifyContent="space-between"
      >
        <Grid
          container
          item
          xs={12}
          sm={2.5}
          direction="column"
          sx={{ gap: "24px" }}
        >
          <Logo />
          <p style={{ lineHeight: "24px", textAlign: "start" }}>
            We sell custom products for all your needs. Packs and bulk products
            that you will enjoy.
          </p>
          <Grid container item color="dark.01">
            <Phone />
            <label>+1-202-555-0129</label>
          </Grid>
          <Grid container item color="dark.04" sx={{ gap: "5px" }}>
            <ExternalLink to="https://facebook.com" icon={Facebook} />
            <ExternalLink to="https://twitter.com" icon={Twitter} />
            <ExternalLink to="https://instagram.com" icon={Instagram} />
            <ExternalLink to="https://linkedin.com" icon={LinkedIn} />
            <ExternalLink to="https://youtube.com" icon={YouTube} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={2.5}>
          <LinksSection title="Our Company">
            <Link to="/aboutus">About us</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/partners">Partnerships</Link>
            <Link to="/sutainability">Sustainability</Link>
            <Link to="/blog">Blog</Link>
          </LinksSection>
        </Grid>
        <Grid item xs={12} sm={2.5}>
          <LinksSection title="How we can help">
            <Link to="/place_a_ticket">Place a ticket</Link>
            <Link to="/order_track">Track your order</Link>
            <Link to="/help_center">Help center</Link>
          </LinksSection>
        </Grid>
        <Grid item xs={12} sm={2.5}>
          <LinksSection title="Information">
            <Link to="/contact_us">Contact us</Link>
            <Link to="/live_chat">Live chat</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms of use</Link>
          </LinksSection>
        </Grid>
      </Grid>
      <Grid item xs></Grid>
      <Grid
        item
        container
        sx={{
          gap: "20px",
          marginTop: {
            xs: "50px",
          },
        }}
      >
        <Grid item fontSize={"14px"} color="dark.04">
          © 2022 Customer Products. All rights reserved.
        </Grid>
        <Grid item xs></Grid>
        <Grid item>
          <MenuSelect
            title="Region"
            emptyText={intl.formatMessage({
              id: "select",
            })}
          >
            <div key="cuba">Cuba</div>
            <div key="eu">United States</div>
          </MenuSelect>
        </Grid>
        <Grid item>
          <MenuSelect
            title={intl.formatMessage({
              id: "lang",
            })}
            value={currentLang}
            onChange={(v: string) => {
              if (v) intlCtx.selectLanguage(v);
            }}
            emptyText={intl.formatMessage({
              id: "select",
            })}
          >
            {langsList}
          </MenuSelect>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CartContainerFooter;
