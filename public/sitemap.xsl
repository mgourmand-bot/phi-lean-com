<?xml version="1.0" encoding="UTF-8"?>
<!--
  Mise en forme du sitemap pour les humains.
  Les moteurs de recherche lisent le XML brut et ignorent cette feuille ;
  un navigateur, lui, affiche un tableau lisible au lieu d'une suite d'adresses collées.
-->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  exclude-result-prefixes="sm xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>

  <xsl:template match="/">
    <html lang="fr">
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>Plan du site (sitemap) – Phi-Lean</title>
        <style>
          :root { --bleu:#215f9a; --turq:#0f8a85; --soleil:#d97706; --ink:#212529; --gris:#6b7280; --bord:#d5e1ec; --zebra:#f4f7fb; }
          * { box-sizing: border-box; }
          body { margin: 0; background: #fff; color: var(--ink); font: 16px/1.5 Arial, Helvetica, sans-serif; }
          .stripe { height: 6px; background: linear-gradient(90deg, var(--bleu) 0 33.33%, var(--turq) 33.33% 66.66%, var(--soleil) 66.66% 100%); }
          main { max-width: 72rem; margin: 0 auto; padding: 2.5rem 1rem 4rem; }
          h1 { margin: 0; color: var(--bleu); font-size: 1.9rem; }
          p.lead { margin: .5rem 0 2rem; color: var(--gris); max-width: 60ch; }
          table { width: 100%; border-collapse: collapse; font-size: .95rem; }
          th { text-align: left; padding: .6rem .75rem; border-bottom: 2px solid var(--bleu); color: var(--bleu); }
          td { padding: .55rem .75rem; border-bottom: 1px solid var(--bord); vertical-align: top; word-break: break-all; }
          tr:nth-child(even) td { background: var(--zebra); }
          a { color: var(--bleu); text-decoration: none; }
          a:hover { text-decoration: underline; }
          .lang { display: inline-block; min-width: 2.6rem; margin: 0 .35rem .2rem 0; padding: .05rem .4rem; border: 1px solid var(--bord); font-size: .8rem; font-weight: bold; color: var(--gris); text-align: center; }
          .count { font-weight: bold; color: var(--ink); }
        </style>
      </head>
      <body>
        <div class="stripe"></div>
        <main>
          <xsl:choose>
            <xsl:when test="sm:sitemapindex">
              <h1>Index des sitemaps</h1>
              <p class="lead">Ce fichier est destiné aux moteurs de recherche. Il renvoie vers <span class="count"><xsl:value-of select="count(sm:sitemapindex/sm:sitemap)"/></span> sitemap(s).</p>
              <table>
                <tr><th>Sitemap</th></tr>
                <xsl:for-each select="sm:sitemapindex/sm:sitemap">
                  <tr><td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td></tr>
                </xsl:for-each>
              </table>
            </xsl:when>
            <xsl:otherwise>
              <h1>Plan du site</h1>
              <p class="lead">Ce fichier est destiné aux moteurs de recherche : <span class="count"><xsl:value-of select="count(sm:urlset/sm:url)"/></span> pages, chacune avec ses versions linguistiques. Les moteurs lisent le XML ; cette mise en forme sert seulement à le relire.</p>
              <table>
                <tr><th>Page</th><th>Versions</th></tr>
                <xsl:for-each select="sm:urlset/sm:url">
                  <tr>
                    <td><a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a></td>
                    <td>
                      <xsl:for-each select="xhtml:link">
                        <a class="lang" href="{@href}" title="{@href}"><xsl:value-of select="@hreflang"/></a>
                      </xsl:for-each>
                    </td>
                  </tr>
                </xsl:for-each>
              </table>
            </xsl:otherwise>
          </xsl:choose>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
