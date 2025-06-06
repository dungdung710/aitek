import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

// Dùng các hình mặc định, nếu có ảnh thật chỉ cần đổi đường dẫn.

const VerticalFeatures = () => (
  <Section
    title="Why Choose AutoMate?"
    description="AutoMate is the 100% offline voice assistant and smart dashboard companion for every car. Discover how it brings safety, convenience, and fun to your driving experience."
  >
    {/* Block 1: Feature */}
    <VerticalFeatureRow
      title="100% Offline Voice Control"
      description="AutoMate works reliably anywhere, anytime. All voice commands are processed offline, ensuring privacy and zero dependence on unstable mobile networks."
      image="/assets/images/feature.svg"
      imageAlt="Offline voice control feature"
    />

    {/* Block 2: Feature */}
    <VerticalFeatureRow
      title="Physical Robot Key – Fun & Secure Activation"
      description="A unique, interactive robot key sits on your dashboard, activating AutoMate only when placed. Enhances personalization, provides an extra layer of control and fun."
      image="/assets/images/feature2.svg"
      imageAlt="Physical robot key feature"
      reverse
    />

    {/* Block 3: Feature */}
    <VerticalFeatureRow
      title="Deep Hardware Integration, Easy Retrofit"
      description="AutoMate directly controls vehicle hardware (lights, air conditioning, warnings...) via STM32 microcontroller and I2C/CAN. Upgrade any car affordably – no need for expensive built-in systems."
      image="/assets/images/feature3.svg"
      imageAlt="Hardware integration feature"
    />

    {/* Block 4: How It Works */}
    <VerticalFeatureRow
      title="How AutoMate Works"
      description={
        <>
          <b>Step 1:</b> Driver gives voice command.<br />
          <b>Step 2:</b> Raspberry Pi recognizes command locally (offline) using Vosk.<br />
          <b>Step 3:</b> STM32 microcontroller sends signals to control car features via I2C/CAN.<br />
          <b>Step 4:</b> Robot key activates system only when placed on dashboard – remove it to power off.<br />
        </>
      }
      image="/assets/images/feature4.svg"
      imageAlt="How AutoMate works"
      reverse
    />

    {/* Block 5: Team */}
    <VerticalFeatureRow
      title="Meet the AITEK Team"
      description={
        <>
          <b>Tieu Chi</b> – Team Leader, Embedded Software<br />
          <b>Thuy Tien</b> – Hardware Developer<br />
          <b>Minh Duy</b> – Software Developer<br />
          <b>Nang Tri</b> – Team Spokesperson<br />
          <b>Tien Dung</b> – Market Analyst<br />
          <b>Mentor:</b> Mr. P.T Dang Quang – Faculty of Transportation Engineering, HCMUT
        </>
      }
      image="/assets/images/feature5.svg"
      imageAlt="AITEK Team"
    />

  </Section>
);

export { VerticalFeatures };
