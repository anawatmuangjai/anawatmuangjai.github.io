import { useState } from 'react';
import { cn } from '@/utils';
import type { BaseComponentProps, ContactFormData, FormErrors } from '@/types';
import { contactInfo } from '@/data';

interface ContactProps extends BaseComponentProps {
  title?: string;
}

export function Contact({ title = 'Get In Touch', className }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors['name'] = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors['email'] = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors['email'] = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors['subject'] = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors['message'] = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors['message'] = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create mailto link as fallback since we don't have a backend
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className={cn('bg-white py-20', className)}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-neutral-900 md:text-5xl">{title}</h2>
            <div className="bg-primary-600 mx-auto h-1 w-24"></div>
            <p className="mt-6 text-lg text-neutral-600">
              Ready to start your next project? Let's discuss how we can work together.
            </p>
          </div>

          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="rounded-xl bg-neutral-50 p-8 shadow-lg">
                <h3 className="mb-6 text-2xl font-bold text-neutral-900">Send Message</h3>

                {submitStatus === 'success' && (
                  <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4">
                    <p className="text-green-800">
                      Thank you for your message! Your email client should open shortly.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
                    <p className="text-red-800">
                      Something went wrong. Please try again or contact me directly at{' '}
                      {contactInfo.email}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-neutral-700"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={cn(
                          'w-full rounded-lg border px-4 py-3 text-neutral-900 transition-colors',
                          'focus:border-primary-500 focus:ring-primary-500/20 focus:ring-2 focus:outline-none',
                          errors['name']
                            ? 'border-red-300 bg-red-50'
                            : 'border-neutral-300 bg-white'
                        )}
                        placeholder="Your name"
                      />
                      {errors['name'] && (
                        <p className="mt-2 text-sm text-red-600">{errors['name']}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-neutral-700"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={cn(
                          'w-full rounded-lg border px-4 py-3 text-neutral-900 transition-colors',
                          'focus:border-primary-500 focus:ring-primary-500/20 focus:ring-2 focus:outline-none',
                          errors['email']
                            ? 'border-red-300 bg-red-50'
                            : 'border-neutral-300 bg-white'
                        )}
                        placeholder="your.email@example.com"
                      />
                      {errors['email'] && (
                        <p className="mt-2 text-sm text-red-600">{errors['email']}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-neutral-700"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={cn(
                        'w-full rounded-lg border px-4 py-3 text-neutral-900 transition-colors',
                        'focus:border-primary-500 focus:ring-primary-500/20 focus:ring-2 focus:outline-none',
                        errors['subject']
                          ? 'border-red-300 bg-red-50'
                          : 'border-neutral-300 bg-white'
                      )}
                      placeholder="Project inquiry, collaboration, etc."
                    />
                    {errors['subject'] && (
                      <p className="mt-2 text-sm text-red-600">{errors['subject']}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-neutral-700"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={cn(
                        'w-full resize-none rounded-lg border px-4 py-3 text-neutral-900 transition-colors',
                        'focus:border-primary-500 focus:ring-primary-500/20 focus:ring-2 focus:outline-none',
                        errors['message']
                          ? 'border-red-300 bg-red-50'
                          : 'border-neutral-300 bg-white'
                      )}
                      placeholder="Tell me about your project or how we can work together..."
                    />
                    {errors['message'] && (
                      <p className="mt-2 text-sm text-red-600">{errors['message']}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      'w-full rounded-lg px-6 py-3 font-semibold text-white transition-all duration-200',
                      'bg-primary-600 hover:bg-primary-700 focus:ring-primary-500/20 focus:ring-2 focus:outline-none',
                      'disabled:cursor-not-allowed disabled:opacity-50'
                    )}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info & Social */}
            <div className="order-1 space-y-8 lg:order-2">
              {/* Contact Information */}
              <div>
                <h3 className="mb-6 text-2xl font-bold text-neutral-900">Let's Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 flex h-12 w-12 items-center justify-center rounded-full">
                      <MailIcon className="text-primary-600 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Email</h4>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 flex h-12 w-12 items-center justify-center rounded-full">
                      <LocationIcon className="text-primary-600 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Location</h4>
                      <p className="text-neutral-600">{contactInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="mb-6 text-2xl font-bold text-neutral-900">Follow Me</h3>
                <div className="flex space-x-4">
                  <a
                    href={contactInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-full',
                      'bg-neutral-900 text-white transition-all duration-200',
                      'hover:scale-110 hover:bg-neutral-700'
                    )}
                  >
                    <GithubIcon className="h-6 w-6" />
                  </a>

                  <a
                    href={contactInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-full',
                      'bg-blue-600 text-white transition-all duration-200',
                      'hover:scale-110 hover:bg-blue-500'
                    )}
                  >
                    <LinkedinIcon className="h-6 w-6" />
                  </a>

                  {contactInfo.social.instagram && (
                    <a
                      href={contactInfo.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'flex h-12 w-12 items-center justify-center rounded-full',
                        'bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-all duration-200',
                        'hover:scale-110 hover:from-purple-400 hover:to-pink-400'
                      )}
                    >
                      <InstagramIcon className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-primary-50 border-primary-100 rounded-lg border p-6">
                <h4 className="text-primary-900 mb-2 font-semibold">Quick Response</h4>
                <p className="text-primary-700 text-sm">
                  I typically respond to messages within 24 hours. For urgent inquiries, feel free
                  to reach out on LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Icon Components
function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.48.26 4.938.516a7.68 7.68 0 0 0-2.78 1.81 7.729 7.729 0 0 0-1.81 2.78C.26 5.65.082 6.263.048 7.21.013 8.158 0 8.565 0 12.017c0 3.453.013 3.86.048 4.807.034.947.212 1.56.468 2.103a7.68 7.68 0 0 0 1.81 2.78 7.729 7.729 0 0 0 2.78 1.81c.542.256 1.156.434 2.103.468.947.035 1.354.048 4.807.048 3.453 0 3.86-.013 4.807-.048.947-.034 1.56-.212 2.103-.468a7.68 7.68 0 0 0 2.78-1.81 7.729 7.729 0 0 0 1.81-2.78c.256-.542.434-1.156.468-2.103.035-.947.048-1.354.048-4.807 0-3.453-.013-3.86-.048-4.807-.034-.947-.212-1.56-.468-2.103a7.68 7.68 0 0 0-1.81-2.78 7.729 7.729 0 0 0-2.78-1.81C13.777.26 13.164.082 12.217.048 11.269.013 10.862 0 7.409 0h4.608zm-.86 5.594a6.422 6.422 0 1 1 0 12.845 6.422 6.422 0 0 1 0-12.845zm0 2.064a4.358 4.358 0 1 0 0 8.717 4.358 4.358 0 0 0 0-8.717zm6.073-2.17a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
    </svg>
  );
}
