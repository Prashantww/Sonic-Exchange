import React, { useState } from "react";
import styles from "./P2P.module.css";
import { Link } from "react-router-dom";
import { GrCircleInformation } from "react-icons/gr";
import {
  IoChevronDownOutline,
  IoCloseSharp,
  IoCopyOutline,
  IoAddCircleOutline,
} from "react-icons/io5";

// Main P2P Trading Component
const P2P = ({ mode = "sell" }) => {
  return (
    <div className={styles.container}>
      <P2PHeader />
      <P2PToggle activeMode={mode} />
      <CountrySelector />
      {mode === "sell" ? <SellSection /> : <BuySection />}
    </div>
  );
};

// P2P Header Component
const P2PHeader = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>P2P Trading</h1>
      <button className={styles.infoButton}>
        <GrCircleInformation size={20} />
      </button>
    </div>
  );
};

// Toggle between Buy/Sell
const P2PToggle = ({ activeMode }) => {
  return (
    <div className={styles.toggleContainer}>
      <Link to={"/p2p/sell"} className={styles.linkBtn}>
        <button
          className={`${styles.toggleButton} ${
            activeMode === "sell" ? styles.sellActive : ""
          }`}
        >
          Sell
        </button>
      </Link>
      <Link to={"/p2p/buy"} className={styles.linkBtn}>
        <button
          className={`${styles.toggleButton} ${
            activeMode === "buy" ? styles.buyActive : ""
          }`}
        >
          Buy
        </button>
      </Link>
    </div>
  );
};

// Country/Region Selector
const CountrySelector = () => {
  return (
    <div className={styles.countrySelector}>
      <input
        type="text"
        placeholder="Country / Region"
        className={styles.countryInput}
      />
      <button className={styles.dropdownButton}>
        <IoChevronDownOutline size={28} />
      </button>
    </div>
  );
};

// Sell Section Component
const SellSection = () => {
  return (
    <div className={styles.tradingSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Sell USDT</h2>
        <button className={styles.closeButton}>
          <IoCloseSharp size={25} />
        </button>
      </div>

      <div className={styles.sectionContent}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>USDT to Sell</label>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter amount"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>You Will Receive (INR / USD)</label>
          <input
            type="text"
            className={styles.input}
            placeholder="Who Will Receive"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Payment</label>
          <div className={styles.selectWrapper}>
            <input
              type="text"
              className={styles.input}
              placeholder="Payment Method"
              readOnly
            />
            <button className={styles.selectButton}>
              <IoChevronDownOutline size={25} />
            </button>
          </div>
        </div>

        <div className={styles.walletSection}>
          <h3 className={styles.walletTitle}>
            Send USDT to this wallet Address
          </h3>
          <div className={styles.networkInfo}>
            <span className={styles.networkLabel}>Network:</span>
            <span className={styles.networkValue}>TRC20</span>
          </div>
          <div className={styles.addressContainer}>
            <span className={styles.address}>TMVISk3n7hDxx9N9RqA99sC4C49</span>
            <button className={styles.copyButton}>
              <IoCopyOutline size={18} />
            </button>
          </div>
          <p className={styles.warning}>
            Only send USDT to this address. Sending another coin or token to
            this address may result in the loss of your deposit
          </p>
        </div>

        <div className={styles.uploadSection}>
          <button className={styles.uploadButton}>
            <IoAddCircleOutline size={30} />
          </button>
          <div className={styles.uploadText}>
            <p className={styles.uploadTitle}>Upload proof if required</p>
            <p className={styles.uploadSubtitle}>JPG / PNG supported</p>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.cancelButton}>Cancel</button>
          <button className={styles.confirmButton}>Confirm Sell</button>
        </div>
      </div>
    </div>
  );
};

// Buy Section Component
const BuySection = () => {
  return (
    <div className={styles.tradingSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Buy USDT</h2>
        <button className={styles.closeButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div className={styles.sectionContent}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>USDT to Buy</label>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter amount"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>You Will Pay (INR / USD)</label>
          <input
            type="text"
            className={styles.input}
            placeholder="Amount to pay"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Payment</label>
          <div className={styles.selectWrapper}>
            <input
              type="text"
              className={styles.input}
              placeholder="Payment Method"
              readOnly
            />
            <button className={styles.selectButton}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.cancelButton}>Cancel</button>
          <button className={styles.confirmButton}>Confirm Buy</button>
        </div>
      </div>
    </div>
  );
};

export default P2P;
