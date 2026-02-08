"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import ServiceModal from "@/components/ServiceModal"
import { Links } from "@/constants/nav"
import { servicesData } from "@/constants/service"
import { HyperText } from "@/components/ui/hyper-text"

export default function Home() {
  const [selectedService, setSelectedService] = useState<(typeof servicesData)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (service: (typeof servicesData)[0]) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedService(null), 300)
  }

  return (
    <>
      <div className="container">
        <nav>
          <div className="logo flex gap-4">
            <Image src="/ghost-finance.png" alt="Ghost Finance Logo" width={38} height={38} />
            Ghost Finance
          </div>
          <div className="nav-links">
            {Links.map((link) => {
              return(
                <Link key={link.href} href={link.href}>{link.label}</Link>
              )
            })}
          </div>
        </nav>

        <section className="hero">
          <h1>
            Fixed-Rate
            <br />
            P2P
            <br />
            Lending
          </h1>
          <div className="hero-meta">
            <p>
              Decentralized peer-to-peer stablecoin lending with batch auctions, risk tranches, and on-chain credit scoring. Fair rates. No intermediaries.
            </p>
          </div>
        </section>

        <section className="services">
          {servicesData.map((service) => (
            <div
              key={service.number}
              className="service-row"
              onClick={() => openModal(service)}
              style={{ cursor: "pointer" }}
            >
              <span className="service-num">{service.number}</span>
              <h2>{service.title}</h2>
              <span className="service-num">↗</span>
            </div>
          ))}
        </section>

        <footer>
          <div className="cta grid place-items-center">
            <HyperText className="text-9xl font-black max-w-3xl">
              START LENDING
            </HyperText>
          </div>
          <div className="footer-bottom">
            <div>Ghost Finance © 2026</div>
            <div>Decentralized / Non-Custodial</div>
            <div>GitHub / Discord / Twitter</div>
          </div>
        </footer>
      </div>

      <ServiceModal isOpen={isModalOpen} onClose={closeModal} service={selectedService} />
    </>
  )
}
