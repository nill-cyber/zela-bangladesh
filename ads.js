// ads.js - Complete ad integration for all pages
(function() {
    'use strict';

    function initAds() {
        // 1. POPUNDER AD
        function loadPopunder() {
            var popunderScript = document.createElement('script');
            popunderScript.src = "https://pl29057720.profitablecpmratenetwork.com/de/f9/f5/def9f5de058daeccca7ba3234c285a98.js";
            popunderScript.async = true;
            document.head.appendChild(popunderScript);
        }

        // 2. SOCIAL BAR
        function loadSocialBar() {
            var socialScript = document.createElement('script');
            socialScript.src = "https://pl29057721.profitablecpmratenetwork.com/8f/dc/94/8fdc94c5d684f81c0b5cae99b8995b6a.js";
            socialScript.async = true;
            document.head.appendChild(socialScript);
        }

        // 3. NATIVE BANNER
        function loadNativeBanner() {
            // Create container if it doesn't exist
            if (!document.getElementById('container-3cac2322e355de502ae2690107e0b1d4')) {
                var container = document.createElement('div');
                container.id = "container-3cac2322e355de502ae2690107e0b1d4";
                // Insert after header or at beginning of body
                var referenceNode = document.querySelector('header') || document.body.firstChild;
                if (referenceNode && referenceNode.parentNode) {
                    referenceNode.parentNode.insertBefore(container, referenceNode.nextSibling);
                } else {
                    document.body.appendChild(container);
                }
            }
            
            var nativeScript = document.createElement('script');
            nativeScript.src = "https://pl29057722.profitablecpmratenetwork.com/3cac2322e355de502ae2690107e0b1d4/invoke.js";
            nativeScript.async = true;
            nativeScript.setAttribute('data-cfasync', 'false');
            document.head.appendChild(nativeScript);
        }

        // 4. BANNER 300x250
        function loadBanner300x250() {
            // Set atOptions globally
            window.atOptions = {
                'key': '54235728243763f6f9926708802b84df',
                'format': 'iframe',
                'height': 250,
                'width': 300,
                'params': {}
            };
            
            var bannerScript = document.createElement('script');
            bannerScript.src = "https://www.highperformanceformat.com/54235728243763f6f9926708802b84df/invoke.js";
            document.head.appendChild(bannerScript);
        }

        // 5. SMARTLINK
        function loadSmartlink() {
            var smartlinkFrame = document.createElement('iframe');
            smartlinkFrame.src = "https://www.profitablecpmratenetwork.com/u9cqikhxb?key=d0d840b62ca6e7f2ffdb274bd33645bd";
            smartlinkFrame.style.width = "1px";
            smartlinkFrame.style.height = "1px";
            smartlinkFrame.style.display = "none";
            document.body.appendChild(smartlinkFrame);
        }

        // Load all ads with slight delays to avoid conflicts
        loadPopunder();
        
        setTimeout(loadSocialBar, 300);
        setTimeout(loadNativeBanner, 600);
        setTimeout(loadBanner300x250, 900);
        setTimeout(loadSmartlink, 1200);
    }

    // Start when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAds);
    } else {
        initAds();
    }
})();