'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ContactFormData {
  fullName: string;
  email: string;
  projectType: string;
  budgetRange: string;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  projectType?: string;
  budgetRange?: string;
  message?: string;
}

const PROJECT_TYPES = [
  'Website Development',
  'App Development',
  'AI Development',
  'UI/UX Design',
  '3D Web Experience',
  'Other',
];

const BUDGET_RANGES = [
  'Under ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000+',
  'Not sure yet — need guidance',
];

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    projectType: PROJECT_TYPES[0],
    budgetRange: BUDGET_RANGES[0],
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    }
    if (!formData.projectType.trim()) {
      newErrors.projectType = 'Please select a project type.';
    }
    if (!formData.budgetRange.trim()) {
      newErrors.budgetRange = 'Please select a budget range.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');
    setErrorMessage('');

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || '';
    const endpoint = formspreeId.startsWith('http')
      ? formspreeId
      : `https://formspree.io/f/${formspreeId}`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          email: '',
          projectType: PROJECT_TYPES[0],
          budgetRange: BUDGET_RANGES[0],
          message: '',
        });
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus('error');
        setErrorMessage(
          data?.errors?.[0]?.message || 'Failed to send message. Please try again.'
        );
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please check your connection and try again.');
    }
  };

  const getInputStyles = (hasError?: boolean) =>
    `bg-white/5 border ${
      hasError ? 'border-red-400/60 focus:border-red-400' : 'border-white/10 focus:border-ather-cyan'
    } rounded-xl px-4 py-3.5 text-base sm:text-sm text-white placeholder-white/30 focus:outline-none transition-colors font-body w-full max-w-full box-border`;

  const labelStyles =
    'font-mono text-xs uppercase tracking-widest text-white/50 mb-2 block text-left';

  return (
    <div className="w-full max-w-full relative overflow-hidden">
      {/* Subtle Decorative Glows */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-ather-cyan/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-ather-purple/20 rounded-full blur-3xl pointer-events-none" />

      <form onSubmit={handleSubmit} noValidate className="space-y-6 relative z-10 text-left w-full max-w-full">
        {/* Full Name */}
        <div className="w-full">
          <label htmlFor="fullName" className={labelStyles}>
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className={getInputStyles(!!errors.fullName)}
          />
          {errors.fullName && (
            <p className="text-red-400 text-xs font-mono mt-1.5">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div className="w-full">
          <label htmlFor="email" className={labelStyles}>
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={getInputStyles(!!errors.email)}
          />
          {errors.email && (
            <p className="text-red-400 text-xs font-mono mt-1.5">{errors.email}</p>
          )}
        </div>

        {/* Project Type & Budget Range Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {/* Project Type */}
          <div className="w-full">
            <label htmlFor="projectType" className={labelStyles}>
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`${getInputStyles(!!errors.projectType)} cursor-pointer`}
            >
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type} style={{ backgroundColor: '#0B0B10', color: '#F5F5F7' }}>
                  {type}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <p className="text-red-400 text-xs font-mono mt-1.5">{errors.projectType}</p>
            )}
          </div>

          {/* Budget Range */}
          <div className="w-full">
            <label htmlFor="budgetRange" className={labelStyles}>
              Budget Range
            </label>
            <select
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              className={`${getInputStyles(!!errors.budgetRange)} cursor-pointer`}
            >
              {BUDGET_RANGES.map((range) => (
                <option key={range} value={range} style={{ backgroundColor: '#0B0B10', color: '#F5F5F7' }}>
                  {range}
                </option>
              ))}
            </select>
            {errors.budgetRange && (
              <p className="text-red-400 text-xs font-mono mt-1.5">{errors.budgetRange}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="w-full">
          <label htmlFor="message" className={labelStyles}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            className={`${getInputStyles(!!errors.message)} resize-none`}
          />
          {errors.message && (
            <p className="text-red-400 text-xs font-mono mt-1.5">{errors.message}</p>
          )}
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-body text-sm font-medium text-center"
            >
              Message sent! We'll reply within 24 hours.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Message */}
        <AnimatePresence>
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 font-body text-sm font-medium text-center"
            >
              {errorMessage || 'An error occurred. Please try again.'}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <div className="text-center sm:text-left w-full">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full sm:w-auto bg-gradient-to-r from-ather-cyan via-cyan-400 to-cyan-300 text-black font-mono font-bold text-sm uppercase tracking-wider rounded-full px-8 py-4 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_35px_rgba(0,229,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
}
