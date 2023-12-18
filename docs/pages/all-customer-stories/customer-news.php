<section
	class="py-20"
	x-data="customerNews"
	x-on:industry-changed="industry = $event.detail.value"
	x-on:serviceused-changed="serviceUsed = $event.detail.value"
	x-on:companysize-changed="companySize = $event.detail.value"
>
	<div class="max-w-6xl mx-auto">
		<div class="flex flex-col items-start">
			<div class="mt-6">
				<h3 class="text-2xl md:text-5xl/[1.1] font-medium">
					See how brands create remarkable&nbsp;<span
						class="hidden md:inline"
						><br /></span
					>customer experiences with Nextiva<span
						class="hidden md:inline"
						><br
					/></span>
				</h3>
				<p class="false mt-4 text-base/loose opacity-70 max-w-xl"></p>
			</div>
			<div class="mt-8 flex items-center gap-3"></div>
		</div>
		<div class="mt-4 flex items-start gap-20">
			<div class="w-80 flex flex-col gap-4 sticky top-24">
				<div class="relative p-px rounded-full overflow-hidden">
					<div
						class="absolute inset-0"
						style="
							background: radial-gradient(
									180.33% 92.46% at 50% 111.42%,
									rgba(255, 255, 255, 0.15) 0%,
									rgba(255, 255, 255, 0) 28.94%
								),
								radial-gradient(
									119.05% 61.04% at 50% -13.57%,
									rgba(255, 255, 255, 0.15) 0%,
									rgba(255, 255, 255, 0) 49.35%
								),
								linear-gradient(
									rgba(255, 255, 255, 0.2) 0%,
									rgba(255, 255, 255, 0) 100%
								);
						"
					></div>
					<div class="relative bg-canvas rounded-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
							class="absolute inset-y-0 my-auto left-3 w-4 h-4 opacity-40"
						>
							<path
								fill-rule="evenodd"
								d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
								clip-rule="evenodd"
							></path>
						</svg>
						<input
							class="w-64 h-11 pb-2.5 text-sm/none pl-10 border-none"
							type="search"
							placeholder="Type to search"
						/>
					</div>
				</div>
				<div
					x-data="{expanded: false, values: []}"
					x-init="$watch('values', value => $dispatch('industry-changed', {value: value}))"
					class="relative p-px rounded-xl overflow-hidden"
				>
					<div
						class="flex flex-col border border-content/10 bg-content/5 overflow-hidden"
						x-bind:style="{borderRadius: expanded ? '20px' : '30px'}"
						style="border-radius: 30px"
					>
						<button
							class="py-3 pl-5 pr-4 text-left flex items-center gap-3 justify-between"
							x-on:click="expanded = !expanded"
						>
							<div class="truncate">Industry</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								aria-hidden="true"
								x-bind:class="expanded && '-rotate-180'"
								class="h-4 w-4 opacity-70 transition-all"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								></path>
							</svg>
						</button>
						<div
							x-show="expanded"
							class="px-4 font-light text-sm/loose opacity-90"
							style="display: none"
						>
							<div
								class="w-full flex justify-center"
								style="opacity: 1"
							>
								<div
									class="w-full h-px bg-gradient-to-r from-content/[0.03] via-content/50 to-content-[0.03]"
								></div>
							</div>
							<div class="pt-2 pb-4">
								<label class="flex items-center gap-3"
									><input
										type="checkbox"
										x-model="values"
										value="Communication Suite"
									/><span>Communication Suite</span></label
								><label class="flex items-center gap-3"
									><input
										type="checkbox"
										x-model="values"
										value="Customer Experience Suite"
									/><span
										>Customer Experience Suite</span
									></label
								><label class="flex items-center gap-3"
									><input
										type="checkbox"
										x-model="values"
										value="Sales and Commerce Suite"
									/><span
										>Sales and Commerce Suite</span
									></label
								><label class="flex items-center gap-3"
									><input
										type="checkbox"
										x-model="values"
										value="Marketing Suite"
									/><span>Marketing Suite</span></label
								>
							</div>
						</div>
					</div>
				</div>
				<div
					x-data="{expanded: false, values: []}"
					x-init="$watch('values', value => $dispatch('serviceused-changed', {value: value}))"
					class="relative p-px rounded-xl overflow-hidden"
				>
					<div
						class="flex flex-col border border-content/10 bg-content/5 overflow-hidden"
						x-bind:style="{borderRadius: expanded ? '20px' : '30px'}"
						style="border-radius: 30px"
					>
						<button
							class="py-3 pl-5 pr-4 text-left flex items-center gap-3 justify-between"
							x-on:click="expanded = !expanded"
						>
							<div class="truncate">Service used</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								aria-hidden="true"
								x-bind:class="expanded && '-rotate-180'"
								class="h-4 w-4 opacity-70 transition-all"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								></path>
							</svg>
						</button>
						<div
							x-show="expanded"
							class="px-4 font-light text-sm/loose opacity-90"
							style="display: none"
						>
							<div
								class="w-full flex justify-center"
								style="opacity: 1"
							>
								<div
									class="w-full h-px bg-gradient-to-r from-content/[0.03] via-content/50 to-content-[0.03]"
								></div>
							</div>
							<div class="pt-2 pb-4">
								<label class="flex items-center gap-3"
									><input
										type="checkbox"
										x-model="values"
										value="Communication Suite"
									/><span>Communication Suite</span></label
								><label class="flex items-center gap-3"
									><input
										type="checkbox"
										x-model="values"
										value="Customer Experience Suite"
									/><span
										>Customer Experience Suite</span
									></label
								><label class="flex items-center gap-3"
									><input
										type="checkbox"
										x-model="values"
										value="Sales and Commerce Suite"
									/><span
										>Sales and Commerce Suite</span
									></label
								><label class="flex items-center gap-3"
									><input
										type="checkbox"
										x-model="values"
										value="Marketing Suite"
									/><span>Marketing Suite</span></label
								>
							</div>
						</div>
					</div>
				</div>
				<div
					x-data="{expanded: false, values: []}"
					x-init="$watch('values', value => $dispatch('companysize-changed', {value: value}))"
					class="relative p-px rounded-xl overflow-hidden"
				>
					<div
						class="flex flex-col border border-content/10 bg-content/5 overflow-hidden"
						x-bind:style="{borderRadius: expanded ? '20px' : '30px'}"
						style="border-radius: 30px"
					>
						<button
							class="py-3 pl-5 pr-4 text-left flex items-center gap-3 justify-between"
							x-on:click="expanded = !expanded"
						>
							<div class="truncate">Company size</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								aria-hidden="true"
								x-bind:class="expanded && '-rotate-180'"
								class="h-4 w-4 opacity-70 transition-all"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								></path>
							</svg>
						</button>
						<div
							x-show="expanded"
							class="px-4 font-light text-sm/loose opacity-90"
							style="display: none"
						>
							<div
								class="w-full flex justify-center"
								style="opacity: 1"
							>
								<div
									class="w-full h-px bg-gradient-to-r from-content/[0.03] via-content/50 to-content-[0.03]"
								></div>
							</div>
							<div class="pt-2 pb-4">
								<label class="flex items-center gap-3"
									><input
										type="checkbox"
										x-model="values"
										value="Communication Suite"
									/><span>Communication Suite</span></label
								><label class="flex items-center gap-3"
									><input
										type="checkbox"
										x-model="values"
										value="Customer Experience Suite"
									/><span
										>Customer Experience Suite</span
									></label
								><label class="flex items-center gap-3"
									><input
										type="checkbox"
										x-model="values"
										value="Sales and Commerce Suite"
									/><span
										>Sales and Commerce Suite</span
									></label
								><label class="flex items-center gap-3"
									><input
										type="checkbox"
										x-model="values"
										value="Marketing Suite"
									/><span>Marketing Suite</span></label
								>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mt-1 flex-1">
				<div class="grid grid-cols-2 gap-x-7 gap-y-10">
					<div
						class="flex flex-col items-start relative flex-shrink-0"
					>
						<div
							class="mb-4 aspect-video w-full overflow-hidden relative rounded-lg"
						>
							<img
								src="/img/news-and-media/techcircle.png"
								alt=""
								class="h-full w-full object-cover object-bottom"
							/>
						</div>
						<div
							class="mb-1.5 flex items-center gap-2 bg-content/[0.08] w-fit px-3 py-2 rounded-full"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
								class="h-4 w-4"
							>
								<path
									d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
								></path>
								<path
									fill-rule="evenodd"
									d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span class="text-sm/none tracking-wide"
								>Nov 15 2023
							</span>
						</div>
						<h3 class="text-xl">
							Immigration and diverse populace made America an
							innovation superpower
						</h3>
						<a
							href="#"
							class="hover:opacity-90 mt-6 inline-flex items-center gap-3"
							>Read more<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-5 h-5 mt-0.5"
							>
								<path
									fill-rule="evenodd"
									d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
									clip-rule="evenodd"
								></path>
							</svg>
						</a>
					</div>
					<div
						class="flex flex-col items-start relative flex-shrink-0"
					>
						<div
							class="mb-4 aspect-video w-full overflow-hidden relative rounded-lg"
						>
							<img
								src="/img/news-and-media/delivering-innovation.png"
								alt=""
								class="h-full w-full object-cover object-bottom"
							/>
						</div>
						<div
							class="mb-1.5 flex items-center gap-2 bg-content/[0.08] w-fit px-3 py-2 rounded-full"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
								class="h-4 w-4"
							>
								<path
									d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
								></path>
								<path
									fill-rule="evenodd"
									d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span class="text-sm/none tracking-wide"
								>Nov 15 2023</span
							>
						</div>
						<h3 class="text-xl">
							Never have an exit strategy, advises Tomas Gorny,
							Co-founder and CEO of Nextiva
						</h3>
						<a
							href="#"
							class="hover:opacity-90 mt-6 inline-flex items-center gap-3"
							>Read more<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-5 h-5 mt-0.5"
							>
								<path
									fill-rule="evenodd"
									d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
									clip-rule="evenodd"
								></path>
							</svg>
						</a>
					</div>
					<div
						class="flex flex-col items-start relative flex-shrink-0"
					>
						<div
							class="mb-4 aspect-video w-full overflow-hidden relative rounded-lg"
						>
							<img
								src="/img/news-and-media/thought-about-AI.png"
								alt=""
								class="h-full w-full object-cover object-bottom"
							/>
						</div>
						<div
							class="mb-1.5 flex items-center gap-2 bg-content/[0.08] w-fit px-3 py-2 rounded-full"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
								class="h-4 w-4"
							>
								<path
									d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
								></path>
								<path
									fill-rule="evenodd"
									d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span class="text-sm/none tracking-wide"
								>Nov 13 2023</span
							>
						</div>
						<h3 class="text-xl">
							How will AI impact the future of work?
						</h3>
						<a
							href="#"
							class="hover:opacity-90 mt-6 inline-flex items-center gap-3"
							>Read more<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-5 h-5 mt-0.5"
							>
								<path
									fill-rule="evenodd"
									d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
									clip-rule="evenodd"
								></path>
							</svg>
						</a>
					</div>
					<div
						class="flex flex-col items-start relative flex-shrink-0"
					>
						<div
							class="mb-4 aspect-video w-full overflow-hidden relative rounded-lg"
						>
							<img
								src="/img/news-and-media/azcentral.png"
								alt=""
								class="h-full w-full object-cover object-bottom"
							/>
						</div>
						<div
							class="mb-1.5 flex items-center gap-2 bg-content/[0.08] w-fit px-3 py-2 rounded-full"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
								class="h-4 w-4"
							>
								<path
									d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
								></path>
								<path
									fill-rule="evenodd"
									d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span class="text-sm/none tracking-wide"
								>Nov 13 2023</span
							>
						</div>
						<h3 class="text-xl">
							Multimillionaire at 22 to broke to a nearly $1
							billion private equity sale: The Inspiring...
						</h3>
						<a
							href="#"
							class="hover:opacity-90 mt-6 inline-flex items-center gap-3"
							>Read more<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-5 h-5 mt-0.5"
							>
								<path
									fill-rule="evenodd"
									d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
									clip-rule="evenodd"
								></path>
							</svg>
						</a>
					</div>
					<div
						class="flex flex-col items-start relative flex-shrink-0"
					>
						<div
							class="mb-4 aspect-video w-full overflow-hidden relative rounded-lg"
						>
							<img
								src="/img/news-and-media/a-robot-holding-a-man.png"
								alt=""
								class="h-full w-full object-cover object-bottom"
							/>
						</div>
						<div
							class="mb-1.5 flex items-center gap-2 bg-content/[0.08] w-fit px-3 py-2 rounded-full"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
								class="h-4 w-4"
							>
								<path
									d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
								></path>
								<path
									fill-rule="evenodd"
									d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span class="text-sm/none tracking-wide"
								>Nov 13 2023</span
							>
						</div>
						<h3 class="text-xl">
							How Nextiva is revolutionizing business
							communication using Cloud and Generative AI
						</h3>
						<a
							href="#"
							class="hover:opacity-90 mt-6 inline-flex items-center gap-3"
							>Read more<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-5 h-5 mt-0.5"
							>
								<path
									fill-rule="evenodd"
									d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
									clip-rule="evenodd"
								></path>
							</svg>
						</a>
					</div>
					<div
						class="flex flex-col items-start relative flex-shrink-0"
					>
						<div
							class="mb-4 aspect-video w-full overflow-hidden relative rounded-lg"
						>
							<img
								src="/img/news-and-media/tec-enterpreneure.png"
								alt=""
								class="h-full w-full object-cover object-bottom"
							/>
						</div>
						<div
							class="mb-1.5 flex items-center gap-2 bg-content/[0.08] w-fit px-3 py-2 rounded-full"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
								class="h-4 w-4"
							>
								<path
									d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
								></path>
								<path
									fill-rule="evenodd"
									d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span class="text-sm/none tracking-wide"
								>Nov 15 2023</span
							>
						</div>
						<h3 class="text-xl">
							Tech Entrepreneur Tomas Gorny strikes again:
							Leverages conversations to help
						</h3>
						<a
							href="#"
							class="hover:opacity-90 mt-6 inline-flex items-center gap-3"
							>Read more<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-5 h-5 mt-0.5"
							>
								<path
									fill-rule="evenodd"
									d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
									clip-rule="evenodd"
								></path>
							</svg>
						</a>
					</div>
					<div
						class="flex flex-col items-start relative flex-shrink-0"
					>
						<div
							class="mb-4 aspect-video w-full overflow-hidden relative rounded-lg"
						>
							<img
								src="/img/news-and-media/nextiva-plans.png"
								alt=""
								class="h-full w-full object-cover object-bottom"
							/>
						</div>
						<div
							class="mb-1.5 flex items-center gap-2 bg-content/[0.08] w-fit px-3 py-2 rounded-full"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
								class="h-4 w-4"
							>
								<path
									d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
								></path>
								<path
									fill-rule="evenodd"
									d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span class="text-sm/none tracking-wide"
								>Nov 15 2023</span
							>
						</div>
						<h3 class="text-xl">
							Nextiva plans to expand India team in next one year
						</h3>
						<a
							href="#"
							class="hover:opacity-90 mt-6 inline-flex items-center gap-3"
							>Read more<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-5 h-5 mt-0.5"
							>
								<path
									fill-rule="evenodd"
									d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
									clip-rule="evenodd"
								></path>
							</svg>
						</a>
					</div>
					<div
						class="flex flex-col items-start relative flex-shrink-0"
					>
						<div
							class="mb-4 aspect-video w-full overflow-hidden relative rounded-lg"
						>
							<img
								src="/img/news-and-media/hire-employess.png"
								alt=""
								class="h-full w-full object-cover object-bottom"
							/>
						</div>
						<div
							class="mb-1.5 flex items-center gap-2 bg-content/[0.08] w-fit px-3 py-2 rounded-full"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								aria-hidden="true"
								class="h-4 w-4"
							>
								<path
									d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
								></path>
								<path
									fill-rule="evenodd"
									d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span class="text-sm/none tracking-wide"
								>Nov 15 2023</span
							>
						</div>
						<h3 class="text-xl">
							US-based Nextiva to hire 100 employees in India
						</h3>
						<a
							href="#"
							class="hover:opacity-90 mt-6 inline-flex items-center gap-3"
							>Read more<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-5 h-5 mt-0.5"
							>
								<path
									fill-rule="evenodd"
									d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
									clip-rule="evenodd"
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-20">
			<div class="w-full flex justify-center" style="opacity: 0.6">
				<div
					class="w-full h-px bg-gradient-to-r from-content/[0.03] via-content/50 to-content-[0.03]"
				></div>
			</div>

			<div class="flex justify-between py-3 items-center relative">
				<button
					x-on:click="previousPage()"
					x-bind:class="!canGoBack && 'opacity-50 pointer-events-none'"
					class="w-10 h-10 rounded-full flex items-center justify-center border-none bg-transparent hover:bg-content/10"
				>
					<svg
						class="w-4 h-4"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>
				<div class="flex items-center gap-4 justify-center">
					<template
						x-for="(_, index) in Array.from({ length: totalPages })"
					>
						<button
							class="border-none h-7 w-7 flex justify-center items-center rounded-full text-sm"
							x-bind:class="index + 1 == currentPage ? 'bg-content/10' : 'bg-transparent opacity-50 hover:opacity-80'"
							x-on:click="setPage(index + 1)"
						>
							<span x-text="index + 1"></span>
						</button>
					</template>
				</div>
				<button
					x-on:click="nextPage()"
					x-bind:class="!canGoForward && 'opacity-50 pointer-events-none'"
					class="w-10 h-10 rounded-full flex items-center justify-center border-none bg-transparent hover:bg-content/10"
				>
					<svg
						class="w-4 h-4"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>
			</div>

			<div class="w-full flex justify-center" style="opacity: 0.6">
				<div
					class="w-full h-px bg-gradient-to-r from-content/[0.03] via-content/50 to-content-[0.03]"
				></div>
			</div>
		</div>
	</div>
</section>

<script>
	document.addEventListener("alpine:init", () => {
		Alpine.data("customerNews", () => ({
			currentPage: 1,
			totalPages: 4,
			canGoBack: false,
			canGoForward: true,
			industry: [],
			serviceUsed: [],
			companySize: [],
			setPage: function (page) {
				this.currentPage = page;
				this.canGoForward = page < this.totalPages;
				this.canGoBack = page > 1;
			},
			previousPage() {
				if (this.currentPage > 1) this.setPage(this.currentPage - 1);
			},
			nextPage() {
				if (this.currentPage < this.totalPages)
					this.setPage(this.currentPage + 1);
			},
		}));
	});
</script>
