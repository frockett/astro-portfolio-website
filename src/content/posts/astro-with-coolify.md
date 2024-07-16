---
title: 'How to Deploy an Astro Site Using Coolify'
pubDate: 2024-07-17
description: 'It really is that easy.'
author: Crockett
tags: ["self-hosting", "tutorial"]
---

## Self-hosting your website
I've already written about my [enthusiasm for self-hosting](/blog/i-love-coolify/) and especially for Coolify as a tool. The deployment process for an Astro site is incredibly straightforward, but I thought I'd write this quick tutorial for anyone less than confident in their configuration skills. 

Trying things for yourself and not being afraid to break something is a good mindset, but, once you do break something, sometimes you need help putting it back together. 

This guide assumes you already have an instance of Coolify up and running and a server for it to manage with something in the ballpark of 1GB of ram minimum. I will also assume that you have your domain set up and DNS records pointing to the domain of the server you will use.

Let's get to it.

### Step 1: Create Your Project and Resource

In the Coolify projects menu, create a new project and name it something memorable.

![An example project](../../images/create-project.png)

The project will open automatically. Enter the default production environment and click the button to add a resource. I'll be adding from a public repository (the one for this website), but private GitHub repositories work and support push to deploy out of the gate with a GitHub app.

![The resource selection screen](../../images/resource-selection.png)

Next, you will be prompted to select which Coolify-managed server you want to deploy to. After that, you will enter the URL for the Git repo that you want to deploy from.

Here is the first important choice, which brings us to the next step.

### Step 2: Configure your build

Once you've entered your repo's URL and checked the repository, some additional input fields will appear. One is to select but build pack. In our case we're going to use Nixpacks, since we haven't prepared a Dockerfile and Astro takes care of most of the build while the rest of what we need is clearly spelled out in our package.json. Nixpacks will analyze our source code and package.json file to build and deploy our project. We do have a choice to main, though.

There is a checkbox asking 'Is it a static site?' that needs our attention.

![screenshot of the deployment config with static site not selected](../../images/buildpack-selection.png)

We're going to check that box for now since Astro is, by default, a static site generator. Selecting it will make a couple changes automatically.

Let's take a look at what happened after we changed it.

![screenshot of the deployment config with the static site box checked](../../images/buildpack-with-static-selected.png)

As you can see, a couple things have happened. The port has been changed to 80 and there is now a field for the root and publish directories containing '/' and '/dist' by default. Since 80 is a common port for HTTP and HTTPS traffic, and Astro's build directory is also /dist by default, it means we're good to go! Continue and now you'll see the larger, more complex configuration screen.

![The configuration panel](../../images/config-panel.png)

Assuming you have your domain and DNS records set up correctly, you'll want to write your full domain in the domains box, then ensure that the publish directory and exposed ports are correctly filled in. 

Selecting the static site checkbox automated some of these changes for us, but you can also change it here (and check the box) if you need to or if you want to experiment.

### Step 3: Revel in your new website

That's it--it's that easy. The Coolify docs should have answers for any other questions about config. You can use Traefik or Caddy as your proxy to accomplish a number of things, but for a simple use case (like hosting this very website) I just left everything as default. Deployment should go smoothly, but check your deployment logs in case there are any issues. 
