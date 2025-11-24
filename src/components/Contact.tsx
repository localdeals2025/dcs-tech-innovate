import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-secondary via-background to-background relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-accent font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Digital Journey?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with our technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background/50"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/50"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project *"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background/50 min-h-[150px]"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground">info@dcstechhub.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Phone</h3>
                  <p className="text-muted-foreground">+91 799 3077 132</p>
                  <p className="text-muted-foreground">Mon-Fri 9am-6pm IST</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Address</h3>
                  <p className="text-muted-foreground">T-Hub 2.0, HITECH City</p>
                  <p className="text-muted-foreground">Hyderabad 500032, IN</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Footprint Section */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-accent font-semibold">Global Presence</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Our Global Footprint
            </h3>
            <p className="text-muted-foreground text-lg">
              Serving clients across continents with local expertise
            </p>
          </div>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8">
              <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-secondary/20 to-background rounded-xl overflow-hidden">
                
                {/* Subtle continent shapes using dots */}
                <svg className="absolute inset-0 w-full h-full opacity-70" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="dots" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                      <circle cx="3" cy="3" r="2" fill="currentColor" className="text-accent" />
                    </pattern>
                  </defs>
                  {/* Realistic continent shapes using dotted pattern */}
                  
                  {/* North America */}
                  <path 
                    d="M 85,95 L 90,88 L 95,85 L 102,83 L 108,82 L 115,83 L 120,85 L 125,88 L 130,92 L 135,95 L 142,98 L 150,100 L 158,102 L 165,104 L 172,105 L 180,106 L 188,107 L 195,108 L 202,109 L 210,110 L 218,111 L 225,112 L 232,114 L 238,116 L 244,119 L 250,122 L 256,126 L 261,130 L 266,135 L 270,140 L 274,146 L 277,152 L 280,159 L 282,166 L 284,174 L 285,182 L 286,190 L 287,198 L 287,206 L 287,214 L 286,222 L 285,230 L 283,238 L 281,245 L 278,252 L 275,258 L 271,264 L 267,269 L 262,274 L 257,278 L 251,282 L 245,285 L 239,288 L 232,291 L 225,294 L 218,297 L 211,300 L 204,303 L 197,306 L 190,309 L 183,312 L 176,315 L 170,318 L 164,321 L 158,324 L 152,327 L 146,330 L 140,333 L 134,336 L 128,339 L 122,342 L 116,345 L 110,348 L 104,351 L 98,354 L 92,357 L 86,360 L 82,362 L 78,363 L 74,363 L 70,362 L 67,360 L 64,357 L 62,353 L 60,349 L 59,344 L 58,339 L 57,333 L 57,327 L 57,321 L 57,315 L 58,309 L 59,303 L 60,297 L 61,291 L 63,285 L 64,279 L 66,273 L 68,267 L 70,261 L 72,255 L 73,249 L 75,243 L 76,237 L 78,231 L 79,225 L 80,219 L 81,213 L 82,207 L 83,201 L 84,195 L 85,189 L 85,183 L 85,177 L 85,171 L 85,165 L 85,159 L 85,153 L 85,147 L 85,141 L 85,135 L 85,129 L 85,123 L 85,117 L 85,111 L 85,105 L 85,99 Z"
                    fill="url(#dots)"
                    className="continent"
                  />
                  
                  {/* South America */}
                  <path 
                    d="M 235,345 L 240,348 L 245,351 L 250,354 L 255,357 L 260,361 L 265,365 L 270,370 L 274,375 L 278,381 L 281,387 L 284,394 L 286,401 L 288,408 L 289,416 L 290,424 L 291,432 L 291,440 L 291,448 L 291,456 L 290,464 L 289,472 L 287,480 L 285,488 L 283,495 L 280,502 L 277,509 L 273,515 L 269,521 L 264,526 L 259,531 L 253,535 L 247,538 L 241,541 L 234,543 L 227,544 L 220,544 L 213,543 L 207,541 L 201,538 L 196,534 L 192,529 L 188,524 L 185,518 L 183,512 L 181,505 L 180,498 L 179,491 L 179,484 L 179,477 L 180,470 L 181,463 L 183,456 L 185,449 L 187,442 L 190,436 L 193,430 L 197,424 L 201,419 L 206,414 L 211,409 L 216,405 L 221,401 L 227,398 L 233,395 L 239,392 L 245,390 L 251,388 L 257,387 L 263,387 L 269,387 L 275,388 L 281,390 L 286,392 L 291,395 L 295,399 L 298,403 L 301,408 L 303,413 L 304,419 L 304,425 L 303,431 L 301,437 L 298,442 L 294,447 L 289,451 L 283,454 L 277,456 L 270,457 L 263,456 L 256,454 L 249,451 L 243,447 L 237,442 L 232,437 L 228,431 L 224,425 L 221,418 L 219,411 L 217,404 L 216,397 L 216,390 L 216,383 L 217,376 L 219,369 L 221,363 L 224,357 L 227,351 L 231,346 L 235,341 Z"
                    fill="url(#dots)"
                    className="continent"
                  />
                  
                  {/* Europe */}
                  <path 
                    d="M 418,115 L 422,110 L 427,106 L 432,103 L 438,101 L 444,100 L 450,100 L 456,101 L 462,103 L 468,106 L 474,110 L 480,114 L 486,119 L 491,125 L 496,131 L 500,138 L 504,145 L 507,152 L 509,160 L 510,168 L 511,176 L 511,184 L 510,192 L 508,200 L 506,207 L 503,214 L 499,220 L 495,226 L 490,231 L 485,236 L 479,240 L 473,243 L 467,246 L 460,248 L 453,249 L 446,249 L 439,248 L 433,246 L 427,243 L 422,239 L 417,235 L 413,230 L 410,224 L 407,218 L 405,211 L 404,204 L 403,197 L 403,190 L 404,183 L 405,176 L 407,169 L 410,163 L 413,157 L 417,152 L 421,147 L 426,143 L 431,139 L 437,136 L 443,134 L 449,132 L 455,131 L 461,131 L 467,132 L 473,134 L 479,136 L 484,139 L 489,143 L 494,147 L 498,152 L 502,157 L 505,163 L 508,169 L 510,175 L 512,182 L 513,189 L 513,196 L 513,203 L 512,210 L 510,216 L 508,222 L 505,228 L 501,233 L 497,238 L 492,242 L 487,245 L 481,248 L 475,250 L 468,251 L 461,251 L 454,250 L 448,248 L 442,245 L 436,241 L 431,237 L 427,232 L 423,226 L 420,220 L 418,214 L 417,207 L 416,200 L 416,193 L 417,186 L 418,179 L 420,173 L 423,167 L 426,161 L 430,156 L 435,152 L 440,148 L 446,145 L 452,143 L 458,142 L 464,142 L 470,143 L 476,145 L 481,148 L 486,152 L 490,156 L 494,161 L 497,167 L 500,173 L 502,179 L 503,186 L 504,193 L 504,200 L 503,206 L 501,212 L 499,218 L 496,223 L 492,228 L 488,232 L 483,236 L 477,239 L 471,241 L 465,242 L 458,242 L 451,241 L 445,239 L 439,236 L 433,232 L 428,228 L 424,223 L 420,218 L 417,212 L 415,206 L 413,200 L 412,193 L 412,186 L 413,179 L 414,173 L 416,167 L 419,161 L 422,156 L 426,151 L 430,147 L 435,143 L 441,140 L 447,138 L 453,137 L 459,137 L 465,138 L 471,140 L 476,143 L 481,147 L 485,151 L 489,156 L 492,161 L 495,167 L 497,173 L 499,179 L 500,185 L 500,192 L 500,198 L 499,204 L 497,210 L 495,216 L 492,221 L 488,226 L 484,230 L 479,234 L 474,237 L 468,240 L 462,242 L 456,243 L 449,243 L 442,242 L 436,240 L 430,237 L 424,233 L 419,229 L 415,224 L 411,219 L 408,213 L 406,207 L 404,201 L 403,195 L 403,188 L 404,182 L 405,176 L 407,170 L 410,164 L 413,159 L 417,154 L 421,150 L 426,146 L 432,143 L 438,141 L 444,140 L 450,140 L 456,141 L 462,143 L 468,146 L 473,150 L 478,154 L 482,159 L 486,164 L 489,170 L 492,176 L 494,182 L 495,188 L 496,195 L 496,201 L 495,207 L 494,213 L 492,219 L 489,224 L 486,229 L 482,234 L 477,238 L 472,242 L 466,245 L 460,247 L 454,248 L 447,248 L 440,247 L 434,245 L 428,242 L 423,238 L 418,234 L 414,229 L 411,224 L 408,218 L 406,212 L 405,206 L 404,200 L 404,193 L 405,187 L 406,181 L 408,175 L 411,170 L 414,165 L 418,160 Z"
                    fill="url(#dots)"
                    className="continent"
                  />
                  
                  {/* Africa */}
                  <path 
                    d="M 465,235 L 470,237 L 475,240 L 480,243 L 485,247 L 490,251 L 495,256 L 500,261 L 505,267 L 509,273 L 513,280 L 517,287 L 520,294 L 523,302 L 525,310 L 527,318 L 528,326 L 529,334 L 529,342 L 529,350 L 528,358 L 527,366 L 525,374 L 523,382 L 520,389 L 517,396 L 513,403 L 509,409 L 505,415 L 500,421 L 495,426 L 490,431 L 484,435 L 478,439 L 472,442 L 465,445 L 458,447 L 451,448 L 444,448 L 437,447 L 430,445 L 424,442 L 418,439 L 412,435 L 407,430 L 402,425 L 398,419 L 394,413 L 391,407 L 389,400 L 387,393 L 386,386 L 385,379 L 385,372 L 386,365 L 387,358 L 389,351 L 391,345 L 394,339 L 397,333 L 401,327 L 405,322 L 410,317 L 415,312 L 420,308 L 426,304 L 432,301 L 438,298 L 445,296 L 452,295 L 459,295 L 466,296 L 473,298 L 479,301 L 485,305 L 491,310 L 496,315 L 501,321 L 505,328 L 509,335 L 512,342 L 514,350 L 516,358 L 517,366 L 517,374 L 517,382 L 516,390 L 514,398 L 512,405 L 509,412 L 505,419 L 501,425 L 496,431 L 491,436 L 485,441 L 479,445 L 473,448 L 466,451 L 459,453 L 452,454 L 445,454 L 438,453 L 431,451 L 425,448 L 419,445 L 413,441 L 408,436 L 403,431 L 399,425 L 395,419 L 392,413 L 390,406 L 388,399 L 387,392 L 387,385 L 387,378 L 388,371 L 390,364 L 392,358 L 395,352 L 398,346 L 402,340 L 406,335 L 411,330 L 416,326 L 422,322 L 428,319 L 434,316 L 441,314 L 448,313 L 455,313 L 462,314 L 469,316 L 475,319 L 481,323 L 487,327 L 492,332 L 497,338 L 501,344 L 505,351 L 508,358 L 510,365 L 512,373 L 513,381 L 513,389 L 513,397 L 512,405 L 510,412 L 508,419 L 505,426 L 501,432 L 497,438 L 492,443 L 487,448 L 481,452 L 475,456 L 469,459 L 462,461 L 455,462 L 448,462 L 441,461 L 434,459 L 428,456 L 422,452 L 417,448 L 412,443 L 408,438 L 404,432 L 401,426 L 399,420 L 397,413 L 396,406 L 396,399 L 396,392 L 397,385 L 399,378 L 401,372 L 404,366 L 408,360 L 412,355 L 417,350 L 422,346 L 428,342 L 434,339 L 441,337 L 448,336 L 455,336 L 462,337 L 469,339 L 475,342 L 481,346 L 486,350 L 491,355 L 495,361 L 499,367 L 502,374 L 505,381 L 507,388 L 508,395 L 509,403 L 509,410 L 508,417 L 507,424 L 505,431 L 502,437 L 499,443 L 495,449 L 491,454 L 486,459 L 481,463 L 475,467 L 469,470 L 462,472 L 455,473 L 448,473 L 441,472 L 434,470 L 428,467 L 422,463 L 417,459 L 413,454 L 409,449 L 406,443 L 403,437 L 401,431 L 400,424 L 399,417 L 399,410 L 400,403 L 401,396 L 403,390 L 406,384 L 409,378 L 413,373 L 417,368 L 422,364 L 428,360 L 434,357 L 441,355 L 448,354 L 455,354 L 462,355 L 469,357 L 475,360 L 481,364 L 486,368 L 491,373 L 495,379 L 499,385 L 502,391 L 504,398 L 506,405 L 507,412 L 507,419 L 507,426 L 506,433 L 504,440 L 502,446 L 499,452 L 495,458 L 491,463 L 486,468 L 481,472 L 475,476 L 469,479 L 462,481 L 455,482 L 448,482 L 441,481 L 434,479 L 428,476 L 422,472 Z"
                    fill="url(#dots)"
                    className="continent"
                  />
                  
                  {/* Asia */}
                  <path 
                    d="M 545,145 L 550,140 L 555,136 L 560,132 L 566,129 L 572,127 L 578,126 L 585,125 L 592,125 L 599,126 L 606,128 L 613,131 L 620,135 L 627,140 L 634,145 L 641,151 L 648,158 L 654,165 L 660,173 L 666,181 L 671,190 L 676,199 L 680,209 L 684,219 L 687,229 L 690,240 L 692,251 L 693,262 L 694,273 L 694,284 L 693,295 L 692,306 L 690,316 L 687,326 L 684,336 L 680,345 L 676,354 L 671,362 L 666,370 L 660,377 L 654,384 L 648,390 L 641,395 L 634,400 L 627,404 L 620,407 L 613,410 L 606,412 L 599,413 L 592,413 L 585,413 L 578,412 L 572,410 L 566,407 L 560,404 L 555,400 L 550,395 L 545,390 L 541,384 L 537,378 L 534,371 L 531,364 L 529,357 L 527,349 L 526,341 L 525,333 L 525,325 L 525,317 L 526,309 L 527,301 L 529,293 L 531,286 L 534,279 L 537,272 L 541,265 L 545,259 L 550,253 L 555,248 L 560,243 L 566,239 L 572,235 L 578,232 L 585,230 L 592,228 L 599,227 L 606,227 L 613,228 L 620,230 L 627,233 L 634,237 L 641,242 L 648,247 L 654,253 L 660,260 L 666,268 L 671,276 L 676,285 L 680,294 L 684,304 L 687,314 L 690,324 L 692,335 L 693,346 L 694,357 L 694,368 L 693,379 L 692,389 L 690,399 L 687,409 L 684,418 L 680,427 L 676,435 L 671,443 L 666,450 L 660,457 L 654,463 L 648,469 L 641,474 L 634,479 L 627,483 L 620,486 L 613,489 L 606,491 L 599,492 L 592,492 L 585,492 L 578,491 L 572,489 L 566,486 L 560,483 L 555,479 L 550,474 L 545,469 L 541,463 L 537,457 L 534,450 L 531,443 L 529,436 L 527,428 L 526,420 L 525,412 L 525,404 L 525,396 L 526,388 L 527,380 L 529,372 L 531,365 L 534,358 L 537,351 L 541,345 L 545,339 L 550,333 L 555,328 L 560,323 L 566,319 L 572,315 L 578,312 L 585,310 L 592,308 L 599,307 L 606,307 L 613,308 L 620,310 L 627,313 L 634,317 L 641,322 L 648,327 L 654,333 L 660,340 L 666,348 L 671,356 L 676,365 L 680,374 L 684,384 L 687,394 L 690,404 L 692,415 L 693,426 L 694,437 L 694,448 L 693,459 L 692,469 L 690,479 L 687,489 L 684,498 L 680,507 L 676,515 L 671,523 L 666,530 L 660,537 L 654,543 L 648,549 L 641,554 L 634,559 L 627,563 L 620,566 L 613,569 L 606,571 L 599,572 L 592,572 L 585,572 L 578,571 L 572,569 L 566,566 L 560,563 L 555,559 L 550,554 L 545,549 L 541,543 L 537,537 L 534,530 L 531,523 L 529,516 L 527,508 L 526,500 L 525,492 L 525,484 L 525,476 L 526,468 L 527,460 L 529,452 L 531,445 L 534,438 L 537,431 L 541,425 L 545,419 L 550,413 L 555,408 L 560,403 L 566,399 L 572,395 L 578,392 L 585,390 L 592,388 L 599,387 L 606,387 L 613,388 L 620,390 L 627,393 L 634,397 L 641,402 L 648,407 L 654,413 L 660,420 L 666,428 L 671,436 L 676,445 L 680,454 L 684,464 L 687,474 L 690,484 L 692,495 L 693,506 L 694,517 L 694,528 L 693,539 L 692,549 L 690,559 L 687,569 L 684,578 L 680,587 L 676,595 L 671,603 L 666,610 L 660,617 L 654,623 L 648,629 L 641,634 L 634,639 L 627,643 L 620,646 L 613,649 L 606,651 L 599,652 L 592,652 L 585,652 L 578,651 L 572,649 L 566,646 L 560,643 L 555,639 L 550,634 L 545,629 Z"
                    fill="url(#dots)"
                    className="continent"
                  />
                  
                  {/* Australia */}
                  <path 
                    d="M 750,415 L 755,413 L 760,412 L 765,411 L 771,411 L 777,412 L 783,413 L 789,415 L 795,418 L 801,421 L 807,425 L 813,430 L 818,435 L 823,441 L 828,447 L 832,454 L 836,461 L 839,469 L 842,477 L 844,485 L 845,494 L 846,503 L 846,512 L 845,521 L 844,529 L 842,537 L 839,545 L 836,552 L 832,559 L 828,565 L 823,571 L 818,576 L 813,581 L 807,585 L 801,588 L 795,591 L 789,593 L 783,594 L 777,595 L 771,595 L 765,594 L 760,593 L 755,591 L 750,588 L 745,585 L 740,581 L 736,576 L 732,571 L 728,565 L 725,559 L 722,552 L 720,545 L 718,537 L 717,529 L 716,521 L 716,512 L 717,503 L 718,494 L 720,485 L 722,477 L 725,469 L 728,461 L 732,454 L 736,447 L 740,441 L 745,435 L 750,430 L 755,425 L 760,421 L 765,418 L 771,415 L 777,413 L 783,412 L 789,411 L 795,411 L 801,412 L 807,413 L 813,415 L 818,418 L 823,421 L 828,425 L 832,430 L 836,435 L 839,441 L 842,447 L 844,454 L 845,461 L 846,469 L 846,477 L 845,485 L 844,493 L 842,501 L 839,508 L 836,515 L 832,522 L 828,528 L 823,534 L 818,539 L 813,544 L 807,548 L 801,552 L 795,555 L 789,557 L 783,558 L 777,559 L 771,559 L 765,558 L 760,557 L 755,555 L 750,552 L 745,548 L 740,544 L 736,539 L 732,534 L 728,528 L 725,522 L 722,515 L 720,508 L 718,501 L 717,493 L 716,485 L 716,477 L 717,469 L 718,461 L 720,454 L 722,447 L 725,441 L 728,435 L 732,430 L 736,425 L 740,421 L 745,418 Z"
                    fill="url(#dots)"
                    className="continent"
                  />
                </svg>

                {/* Location Markers */}
                {[
                  { name: "USA", x: "20%", y: "35%", label: "United States" },
                  { name: "Canada", x: "22%", y: "25%", label: "Canada" },
                  { name: "UK", x: "48%", y: "28%", label: "United Kingdom" },
                  { name: "UAE", x: "62%", y: "45%", label: "United Arab Emirates" },
                  { name: "India", x: "70%", y: "45%", label: "India", isHQ: true },
                  { name: "Australia", x: "82%", y: "72%", label: "Australia" }
                ].map((location, index) => (
                  <div
                    key={location.name}
                    className="absolute group cursor-pointer"
                    style={{ 
                      left: location.x, 
                      top: location.y,
                      animation: `fade-in 0.6s ease-out ${index * 0.15}s both`
                    }}
                  >
                    {/* Outer pulse ring */}
                    <div className={`absolute inset-0 ${location.isHQ ? 'w-8 h-8 -left-4 -top-4' : 'w-6 h-6 -left-3 -top-3'} rounded-full bg-accent/20 animate-ping`} />
                    
                    {/* Marker dot */}
                    <div className={`relative ${location.isHQ ? 'w-4 h-4' : 'w-3 h-3'} rounded-full bg-accent shadow-lg shadow-accent/50 border-2 border-background transition-transform group-hover:scale-125`}>
                      {location.isHQ && (
                        <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary animate-pulse" />
                      )}
                    </div>
                    
                    {/* Location label */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-card border border-border/50 px-2 py-1 rounded-lg shadow-lg backdrop-blur-sm whitespace-nowrap">
                        <p className="text-xs font-semibold text-foreground">{location.label}</p>
                        {location.isHQ && (
                          <p className="text-xs text-accent">Headquarters</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Location Legend */}
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mt-6">
                {[
                  { name: "USA", flag: "🇺🇸" },
                  { name: "Canada", flag: "🇨🇦" },
                  { name: "UK", flag: "🇬🇧" },
                  { name: "UAE", flag: "🇦🇪" },
                  { name: "India", flag: "🇮🇳", isHQ: true },
                  { name: "Australia", flag: "🇦🇺" }
                ].map((location) => (
                  <div
                    key={location.name}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
                      location.isHQ 
                        ? 'bg-accent/10 border-accent/30' 
                        : 'bg-secondary/50 border-border/30 hover:bg-secondary/80'
                    }`}
                  >
                    <span className="text-2xl">{location.flag}</span>
                    <span className="text-sm font-medium">{location.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;